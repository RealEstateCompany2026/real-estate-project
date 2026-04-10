"use client";

import { useState, useRef, DragEvent } from "react";
import { Upload, X, FileText } from "lucide-react";
import { Button } from "./Button";

/**
 * FileUpload - Zone de drag & drop pour upload de fichiers
 *
 * Permet de sélectionner des fichiers par drag & drop ou via le file picker.
 *
 * Specs:
 * - Zone avec border dashed branded
 * - Icône upload cloud 64px
 * - Texte explicatif
 * - Support drag & drop
 * - Validation de taille et format
 * - Aperçu du fichier sélectionné
 *
 * Usage:
 * <FileUpload
 *   accept=".csv,.xlsx,.xls"
 *   maxSize={50 * 1024 * 1024}
 *   onFileSelect={(file) => handleFile(file)}
 * />
 */

export interface FileUploadProps {
  /**
   * Types de fichiers acceptés (ex: ".csv,.xlsx,.xls")
   */
  accept?: string;
  /**
   * Taille maximale en bytes
   * @default 50MB
   */
  maxSize?: number;
  /**
   * Callback quand un fichier est sélectionné
   */
  onFileSelect?: (file: File) => void;
  /**
   * Callback pour supprimer le fichier
   */
  onFileRemove?: () => void;
  /**
   * Fichier actuellement sélectionné
   */
  selectedFile?: File | null;
  /**
   * Message d'erreur
   */
  error?: string;
  /**
   * État disabled
   */
  disabled?: boolean;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function FileUpload({
  accept = "*",
  maxSize = 50 * 1024 * 1024, // 50MB default
  onFileSelect,
  onFileRemove,
  selectedFile,
  error,
  disabled = false,
  className = "",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file validation
  const validateFile = (file: File): string | null => {
    // Check size
    if (file.size > maxSize) {
      const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(0);
      return `Le fichier est trop volumineux. Taille maximale: ${maxSizeMB}MB`;
    }

    // Check extension if accept is specified
    if (accept !== "*") {
      const extensions = accept.split(",").map((ext) => ext.trim());
      const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
      if (!extensions.includes(fileExtension)) {
        return `Format de fichier non supporté. Formats acceptés: ${accept}`;
      }
    }

    return null;
  };

  // Handle file selection
  const handleFileSelect = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      // Could trigger error callback here
      return;
    }

    onFileSelect?.(file);
  };

  // Handle drag events
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  // Handle click to browse
  const handleClick = () => {
    if (!disabled && !selectedFile) {
      fileInputRef.current?.click();
    }
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  // Handle remove file
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileRemove?.();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={className}>
      {/* Drag & Drop Zone */}
      <div
        className={`
          relative rounded-[16px] border-2 border-dashed
          transition-all duration-200 min-h-[200px]
          flex flex-col items-center justify-center
          ${!disabled && !selectedFile ? "cursor-pointer" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${isDragging ? "border-edge-branded-default bg-surface-branded-subtle" : "border-edge-default bg-surface-neutral-default"}
        `.trim()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          disabled={disabled}
          className="hidden"
        />

        {selectedFile ? (
          /* File Selected State */
          <div className="flex flex-col items-center justify-center p-8 w-full">
            <div className="flex items-center gap-4 w-full max-w-md">
              <FileText size={48} className="text-icon-branded-default flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-medium truncate text-content-body font-roboto">
                  {selectedFile.name}
                </p>
                <p className="text-[14px] mt-1 text-content-caption font-roboto">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>

              <Button
                variant="ghost"
                size="small"
                onClick={handleRemove}
                disabled={disabled}
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center p-8">
            <Upload
              size={64}
              className="text-icon-branded-default mb-4 stroke-[1.5]"
            />

            <p className="text-[16px] text-center text-content-body font-roboto">
              Déposez votre fichier ici ou{" "}
              <span className="font-semibold text-icon-branded-default hover:underline cursor-pointer">
                cliquez pour parcourir
              </span>
            </p>

            <p className="text-[14px] mt-2 text-content-caption font-roboto">
              {accept !== "*"
                ? `Formats supportés: ${accept}`
                : "Tous les formats acceptés"}{" "}
              (max {(maxSize / (1024 * 1024)).toFixed(0)}MB)
            </p>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="text-[14px] mt-2 text-content-error font-roboto">
          {error}
        </p>
      )}
    </div>
  );
}
