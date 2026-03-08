import { useState } from "react";
import { useDownloadImage } from "../utils/download-img";
import "./styles.css";

const base64ToFile = (base64: string, filename: string): File => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

const imageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export default function BannerCustomizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(
    localStorage.getItem("bannerNode")
      ? base64ToFile(
          JSON.parse(localStorage.getItem("bannerNode")!)[0].image,
          "banner.png",
        )
      : null,
  );

  const [isContentSavedInLocalStorage, setIsContentSavedInLocalStorage] =
    useState<boolean>(false);

  const [imageBase64, setImageBase64] = useState<string>();

  const [mainText, setMainText] = useState<string>(
    localStorage.getItem("bannerNode")
      ? JSON.parse(localStorage.getItem("bannerNode")!)[0].mainText
      : "",
  );

  const [fileName, setFileName] = useState<string>(
    localStorage.getItem("bannerNode") ? "banner.png" : "",
  );

  const { htmlToPng } = useDownloadImage();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    imageToBase64(file as File).then((base64) => {
      setImageBase64(base64);
      setSelectedFile(file);
    });
  };

  const handleHtmlToPng = () => {
    htmlToPng(".imageContainer", fileName);
  };

  const handleSaveNode = () => {
    if (!mainText) {
      alert("Please enter banner text before saving.");
      return;
    }

    if (!imageBase64) {
      alert("Please select an image before saving.");
      return;
    }

    localStorage.setItem(
      "bannerNode",
      JSON.stringify([
        {
          mainText: mainText ? mainText : null,
          // TODO: Store the image
          image: imageBase64 ? imageBase64 : null,
        },
      ]),
    );

    setIsContentSavedInLocalStorage(true);

    setTimeout(() => {
      setIsContentSavedInLocalStorage(false);
    }, 3000);
  };

  return (
    <div className="section">
      <div>
        <input
          type="text"
          id="fileName"
          placeholder="Enter file name (without extension)"
          className="fileNameInput"
          value={fileName}
          onChange={(event) => {
            setFileName(event.target.value);
          }}
        />
        <p>Selected file: {selectedFile?.name}</p>
        <div className="imageContainer">
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="canvas"
              style={{
                width: 550,
                height: 183.33,
              }}
            />
          )}
          {mainText && <span className="textOverlay">{mainText}</span>}
        </div>
      </div>

      <input
        type="file"
        id="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <textarea
        id="mainText"
        maxLength={100}
        placeholder="Enter banner text here"
        className="textInput"
        onChange={(event) => {
          setMainText(event.target.value);
        }}
      />
      {isContentSavedInLocalStorage && (
        <p style={{ color: "green" }}>
          Your content has been saved in local storage.
        </p>
      )}
      <button onClick={handleHtmlToPng}>Download Banner</button>
      <button onClick={handleSaveNode}>Save Banner</button>
    </div>
  );
}
