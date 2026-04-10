import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "../components/FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Design System/Molecules/FileUpload",
  component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    accept: ".pdf,.jpg,.png,.jpeg",
  },
};

export const CSVUpload: Story = {
  args: {
    accept: ".csv",
    maxSize: 10 * 1024 * 1024, // 10MB
  },
};

export const ExcelUpload: Story = {
  args: {
    accept: ".xlsx,.xls",
    maxSize: 20 * 1024 * 1024, // 20MB
  },
};

export const ImageUpload: Story = {
  args: {
    accept: ".jpg,.jpeg,.png,.webp",
    maxSize: 5 * 1024 * 1024, // 5MB
  },
};

export const MultipleAcceptedTypes: Story = {
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    maxSize: 25 * 1024 * 1024, // 25MB
  },
};

export const WithFile: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const mockFile = new File(["content"], "rapport-vente.pdf", {
      type: "application/pdf",
    });
    return (
      <FileUpload
        accept=".pdf"
        selectedFile={mockFile}
        onFileSelect={(f) => setFile(f)}
        onFileRemove={() => setFile(null)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Fichier trop volumineux (maximum 10 MB)",
    accept: ".csv",
  },
};

export const Interactive: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>("");

    const handleFileSelect = (newFile: File) => {
      if (newFile.size > 5 * 1024 * 1024) {
        setError("Le fichier dépasse 5 MB");
        setFile(null);
      } else {
        setError("");
        setFile(newFile);
      }
    };

    return (
      <div>
        <FileUpload
          accept=".pdf,.csv,.xlsx"
          selectedFile={file}
          onFileSelect={handleFileSelect}
          onFileRemove={() => {
            setFile(null);
            setError("");
          }}
          error={error}
          maxSize={5 * 1024 * 1024}
        />
        {file && <p>Fichier sélectionné: {file.name}</p>}
      </div>
    );
  },
};
