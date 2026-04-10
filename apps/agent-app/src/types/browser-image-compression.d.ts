declare module 'browser-image-compression' {
  interface Options {
    maxSizeMB?: number;
    maxWidthOrHeight?: number;
    useWebWorker?: boolean;
    maxIteration?: number;
    exifOrientation?: number;
    fileType?: string;
    initialQuality?: number;
    alwaysKeepResolution?: boolean;
    signal?: AbortSignal;
  }

  function imageCompression(file: File, options: Options): Promise<File | Blob>;

  export default imageCompression;
}
