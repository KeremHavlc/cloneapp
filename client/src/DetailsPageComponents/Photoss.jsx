import { MdPhotoCamera } from "react-icons/md";
import { Col, Progress, Row, Upload, Image } from "antd";
import React, { useState, useRef, useEffect } from "react";

const Photoss = () => {
  const [fileList, setFileList] = useState([]);
  const maxFiles = 15;

  const handleChange = ({ fileList }) => {
    // Maksimum dosya kontrolü
    if (fileList.length <= maxFiles) {
      setFileList(fileList);
    }
  };
  useEffect(() => {
    fileList.forEach((file, index) => {
      console.log(`${index + 1}. Fotoğraf: ${file.name}`);
    });
  }, [fileList]);

  const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);

  const handleSort = () => {
    const updatedList = [...fileList];
    const temp = updatedList[dragPerson.current];
    updatedList[dragPerson.current] = updatedList[draggedOverPerson.current];
    updatedList[draggedOverPerson.current] = temp;
    setFileList(updatedList);

    // Konsolda sıralı fotoğraf listesini yazdır
  };
  const handleRemove = (file) => {
    const updatedList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(updatedList);
  };
  return (
    <>
      <div className="ml-[394px] pt-[50px] w-[1050px]">
        <span className="font-bold text-lg">Fotoğraf</span>

        <div className="border bg-white w-[1050px] h-auto mt-4 p-4">
          <Upload
            multiple
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false} // Dosyanın doğrudan yüklenmesini engeller
            accept="image/*" // Sadece resim dosyalarını kabul eder
            showUploadList={{
              showRemoveIcon: true,
              removeIcon: <span>X</span>,
            }}
            onRemove={handleRemove}
          >
            {fileList.length >= maxFiles ? (
              <div className="border-2 border-dashed border-gray-300 opacity-50 w-[260px] h-[90px] mt-4 ml-4 bg-gray-100">
                <div className="flex ml-[20px] mt-[15px]">
                  <MdPhotoCamera className="text-6xl text-mavi" />
                  <div className="flex flex-col ml-4">
                    <span className="text-mavi font-bold text-sm">
                      Bilgisayardan
                    </span>
                    <span className="text-mavi font-bold text-sm">
                      Fotoğraf Ekle
                    </span>
                    <span className="text-gray-500 font-semibold">
                      veya sürükle bırak
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 w-[260px] h-[90px] mt-4 ml-4 bg-gray-100">
                <div className="flex ml-[20px] mt-[15px]">
                  <MdPhotoCamera className="text-6xl text-mavi" />
                  <div className="flex flex-col ml-4">
                    <span className="text-mavi font-bold text-sm">
                      Bilgisayardan
                    </span>
                    <span className="text-mavi font-bold text-sm">
                      Fotoğraf Ekle
                    </span>
                    <span className="text-gray-500 font-semibold">
                      veya sürükle bırak
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Upload>

          <div className="mt-5 ml-4 flex flex-col">
            <span className="font-bold text-xs text-gray-700">
              Eklediğiniz Fotoğraf Adedi:{" "}
              <span className="ml-2 text-blue-500 text-lg font-semibold">
                {fileList.length}/{maxFiles}
              </span>
            </span>

            <div className="w-[1500px] flex flex-row">
              <Progress
                percent={(fileList.length / maxFiles) * 100}
                showInfo={false}
                className="w-[480px] "
                strokeColor={{
                  "0%": "#b2ecd9", // Gradient'in başlangıç rengi
                  "100%": "#18a277", // Gradient'in bitiş rengi
                }}
              />
              {fileList.length >= 15 ? (
                <div></div>
              ) : (
                <span className="text-sm ml-10 text-gray-600">
                  Daha fazla fotoğraf ile ilanınızın görünürlüğünü
                  arttırabilirsiniz.
                </span>
              )}
            </div>
          </div>

          {/* Fotoğraf Önizleme Alanı */}
          <div className="mt-7 flex flex-wrap gap-4">
            {fileList.map((file, index) => (
              <div
                key={index}
                className="border w-[150px] h-[150px] flex items-center justify-center rounded-md overflow-hidden"
                draggable
                onDragStart={() => (dragPerson.current = index)}
                onDragEnter={() => (draggedOverPerson.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                {index === 0 && (
                  <div className="absolute mb-[175px] mr-[100px] border rounded-xl bg-vitrinyesil w-[50px] h-15">
                    <span className=" text-white flex justify-center items-center text-sm">
                      Vitrin
                    </span>
                  </div>
                )}
                <Image
                  src={file.thumbUrl || URL.createObjectURL(file.originFileObj)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photoss;
