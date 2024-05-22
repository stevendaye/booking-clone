import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { TbPhotoPlus } from "react-icons/tb";
import { BsCamera } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { PhotosHints } from "../helpers";
import { useAppContext, usePreviewPhotos } from "../../hooks";
import { HotelFormData } from "./ManageHotelForm";

export const PhotosForm = () => {
  const {
    property: { propertyName },
  } = useAppContext();
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const { files, setFiles, handlePhotoChange } = usePreviewPhotos();

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue("imageFiles", files);
  }, [setValue, files]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = (id: number) => {
    const newImages = files.filter((_, idx) => idx !== id);
    setFiles(newImages);
  };

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">
        What does your {propertyName} look like?
      </h2>

      <div className="flex gap-4">
        <div className="w-[600px] flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
          <p>
            <span className="font-bold">
              Upload at least 5 photos of your property.
            </span>{" "}
            The more you upload, the more likely you are to get bookings. You
            can add more later.
          </p>

          <input
            type="file"
            id="fileInputRef"
            accept="image/png,image/jpeg,image/jpg"
            className="hidden"
            multiple
            {...register("imageFiles", {
              validate(imageFiles) {
                if (imageFiles.length === 0) {
                  return "One image must at least be uploaded to show you guests how your propert look like.";
                }
                if (imageFiles.length < 5) {
                  return "Total of 5 or more images are needed to spark the interest of your guest.";
                }
                if (imageFiles.length > 15) {
                  return "You cannot choose more than 15 images in the meantime.";
                }
              },
            })}
            onChange={handlePhotoChange}
            ref={fileInputRef}
          />

          <div
            className={`border-dashed border-gray-600/55
                border-2 w-full pt-4 pb-5 flex flex-col items-center gap-2 ${
                  files.length === 0 && "mb-24"
                } `}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => onKeyDown(e)}
            onClick={(e) => onClick(e)}
          >
            <TbPhotoPlus size={75} className="text-gray-600/40" />

            <p className="font-bold mt-[-5px]">Drag and drop or</p>

            <button
              className=" bg-transparent border-solid border-light-blue
                border-[1px] rounded p-2 text-light-blue flex gap-2 items-center"
            >
              <BsCamera size={20} className="text-light-blue" />
              <span className="text-sm">Upload Photos</span>
            </button>

            <span className=" text-gray-600/70">
              jpg/jpeg or png, maximum 47MB each
            </span>
          </div>
          {errors.imageFiles && (
            <span className="text-red-500">{errors.imageFiles.message}</span>
          )}

          {files.length > 0 && (
            <div className="mt-7 text-gray-600/80">
              Choose a <span className="font-bold">main photo</span> that makes
              a good first impression.
              <p className="mt-2">
                Click an drag the photos to arrange them in order you'll like
                guests to see
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                {files.map(
                  (file, idx) =>
                    typeof file === "string" && (
                      <div
                        key={idx}
                        className=" w-min-[50%] h-[250px] border-solid border-[0.2px] 
                          border-main-gray rounded p-2 relative"
                      >
                        <RxCrossCircled
                          size={30}
                          className=" text-slate-700 absolute top-4 right-4 cursor-pointer"
                          onClick={() => handleRemoveImage(idx)}
                        />
                        <img
                          src={file}
                          alt="property img"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>

        <PhotosHints />
      </div>
    </>
  );
};
