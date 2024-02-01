"use client";
import "./style.css";
import SideBar from "@/components/sideBar";
import { BiBell } from "react-icons/bi";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxCross1, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const content = [
  "Technology",
  "Fashion",
  "Food",
  "Travel",
  "Sports",
  "Music",
  "Art",
  "Health",
  "Education",
  "Finance",
];

type Props = {
  acceptedFiles: ".csv";
  id: "string";
};

const Upload = () => {
  const rowsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [selectedContent, setSelectedContent] = useState(
    Array(content.length).fill([])
  );

  const [selectedCell, setSelectedCell] = useState(null);

  const [showPopover, setShowPopover] = useState(false);
  const [popover, setPopover] = useState(null);
  const [showPopoverIndex, setShowPopoverIndex] = useState(null);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handlePopoverToggleTag = (rowIndex: any) => {
    setShowPopoverIndex(showPopoverIndex === rowIndex ? null : rowIndex);
    setPopover(showPopoverIndex === rowIndex ? null : rowIndex);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page
  const goToNextPage = () => {
    const maxPage = Math.ceil(csvData.slice(1).length / rowsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleContentClickTag = (rowIndex: any, cell: any) => {
    // Toggle the visibility of the popover for the clicked row
    setShowPopover(!showPopover);

    // Implement your logic for handling the click event
    handleContentClick(rowIndex, cell);
  };

  const handleCellSelection = (rowIndex: any, cell: any) => {
    setSelectedCell(cell);
    setShowPopover(false); // Close the popover after selection
  };

  const handleContentClick = (rowIndex: number, cell: string) => {
    setSelectedContent((prevSelectedContent) => {
      const updatedSelectedContent = [...prevSelectedContent];
      const isSelected = updatedSelectedContent[rowIndex].includes(cell);
      if (isSelected) {
        updatedSelectedContent[rowIndex] = updatedSelectedContent[
          rowIndex
        ].filter((item: any) => item !== cell);
      } else {
        updatedSelectedContent[rowIndex] = [
          ...updatedSelectedContent[rowIndex],
          cell,
        ];
      }
      return updatedSelectedContent;
    });
  };

  const handleDeleteOption = (rowIndex: number, cell: string) => {
    setSelectedContent((prevSelectedContent) => {
      const updatedSelectedContent = [...prevSelectedContent];
      updatedSelectedContent[rowIndex] = updatedSelectedContent[
        rowIndex
      ].filter((item: any) => item !== cell);
      return updatedSelectedContent;
    });
  };

  const handleUpload = () => {
    setIsUploading(true);

    setTimeout(() => {
      setIsUploading(false);
    }, 1500);
  };

  const handleDelete = (event: any) => {
    setSelectedFile(null);
    setCsvData([]);
    event.preventDefault();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file.type !== "text/csv") {
      alert("Please upload only CSV files.");
      return;
    }
    setSelectedFile(file);

    console.log("Accepted files", acceptedFiles);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const result = event.target.result as string;
        const rows = result.split("\n").map((row) => row.split(","));
        setCsvData(rows);
      }
    };
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".csv",
  } as any);
  console.log(selectedFile);

  return (
    <div className=" flex flex-row items-start min-h-screen bg-gray-100 ">
      <SideBar />
      <div className="flex flex-col  w-full px-9 ">
        <div className="flex items-center justify-between pt-4   ">
          <span className="text-xl sm:text-2xl font-medium pl-1 ">Upload CSV</span>
          <div className="flex items-center justify-center text-right gap-0">
            <div className="  text-lg sm:text-2xl ">
              <BiBell />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-20 gap-y-6 ">
          <div
            {...getRootProps()}
            className={`w-[350px] h-60 bg-gray-200 flex items-center justify-center border-dashed border-2  group cursor-pointer ${
              isDragActive ? "border-indigo-600" : "border-black"
            }`}
          >
            <input {...getInputProps()} className="" />
            {selectedFile ? (
              <div className="flex flex-col items-center justify-center gap-y-4">
                <p>Selected file: {selectedFile.name}</p>
                <span
                  className="text-red-500 p-2 hover:bg-gray-300/50 rounded-lg hover:shadow-lg shadow-gray-400 font-medium hover:underline transition-all duration-300 ease-out text-base "
                  onClick={() => handleDelete(event)}
                >
                  Remove
                </span>
              </div>
            ) : (
              <>
                <div>
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drop your excel sheet here or&nbsp;
                      <span className="text-indigo-500 group-hover:underline ">
                        <span>browse</span>
                      </span>
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          <div
            {...getRootProps()}
            className="w-[350px] py-3 rounded-lg bg-[#605BFF] font-medium text-white flex items-center justify-center gap-2 text-lg cursor-pointer"
          >
            {isUploading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin h-5 w-5 mr-3 ...">pro</div>
                Processing...
              </div>
            ) : (
              <>
                <div className="text-lg">
                  <MdOutlineFileUpload />
                </div>
                <span>Upload</span>
              </>
            )}
          </div>
          {selectedFile && (
            <>
              {/* <div className=" rounded-xl bg-gray-300"> */}
                <Table className=" relative w-8/12 mx-auto   ">
                  {selectedFile && (
                    <TableHeader className=" pointer-events-none static  w-full bg-gray-300 rounded-t-xl 	">
                      <TableRow>
                        <TableHead className="lg:w-[100px] font-semibold text-base text-black ">
                          id
                        </TableHead>
                        <TableHead className=" lg:w-60 font-semibold text-base text-black ">
                          Links
                        </TableHead>
                        <TableHead className="lg:w-32  font-semibold text-base text-black ">
                          Prefix
                        </TableHead>
                        <TableHead className="lg:w-60 font-semibold text-base text-black  ">
                          Select Tags
                        </TableHead>
                        <TableHead className=" font-semibold text-base text-black">
                          Selected Tags
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                  )}
                  <TableBody className="overflow-y-auto bg-white ">
                    {csvData
                      .slice(1)
                      .slice(startIndex, endIndex)
                      .map((row, rowIndex) => (
                        <TableRow
                          key={rowIndex}
                          className=" "
                        >
                          <TableCell className="font-medium h-10">
                            {row.map((cell, cellIndex) => (
                              <>
                                {cellIndex === 0 && (
                                  <TableCell className=" font-medium">
                                    {cell}
                                  </TableCell>
                                )}
                              </>
                            ))}
                          </TableCell>
                          <TableCell className=" lg:w-60 h-10 ">
                            {row.map((cell, cellIndex) => (
                              <>
                                {cellIndex === 1 && (
                                  <TableCell className="">
                                    <Link
                                       href={`https://${cell}`}
                                      target="_blank"
                                      className="text-indigo-500 hover:underline"
                                    >
                                      {cell}
                                    </Link>
                                  </TableCell>
                                )}
                              </>
                            ))}
                          </TableCell>
                          <TableCell className=" lg:w-32 h-10 ">
                            {row.map((cell, cellIndex) => (
                              <>
                                {cellIndex === 2 && (
                                  <TableCell className="">{cell}</TableCell>
                                )}
                              </>
                            ))}
                          </TableCell>

                          <TableCell className="lg:w-64 h-10 ">
                            <button
                              className="py-2 px-5 border-2 border-black rounded-xl flex items-center justify-center gap-2 text-black font-medium "
                              onClick={() => handlePopoverToggleTag(rowIndex)}
                            >
                                  Select Tags
                                 <FaAngleUp /> 
                            </button>
                            {showPopoverIndex === rowIndex && (
                              <div className="h-52 w-36 text-center absolute z-50 shadow-lg shadow-gray-300 overflow-y-auto element-with-invisible-scrollbar bg-neutral-50 mt-1 rounded-lg space-y-2 px-3 ">
                                {row.slice(3, 13).map((cell, cellIndex) => (
                                  <div
                                    key={cellIndex}
                                    className="p-2 mt-3  mb-2  space-y-3 cursor-pointer bg-white hover:bg-gray-200 text-left rounded-lg text-base font-semibold "
                                    onClick={() =>
                                      handleContentClickTag(rowIndex, cell)
                                    }
                                  >
                                    {cell}
                                  </div>
                                ))}
                              </div>
                            )}
                          </TableCell>

                          <TableCell className="  flex items-center justify-start gap-2 min-w-20 h-20 ">
                            {selectedContent[rowIndex] &&
                              selectedContent[rowIndex].map(
                                (selectedItem: any, index: any) => (
                                  <span
                                    className="p-2 font-medium text-white rounded-lg bg-violet-500 flex items-center justify-center gap-2 cursor-pointer group h-max w-max  duration-200 ease-out "
                                    onClick={() =>
                                      handleDeleteOption(rowIndex, selectedItem)
                                    }
                                  >
                                    {selectedItem}
                                    <RxCross1 />
                                  </span>
                                )
                              )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              {/* </div> */}
              <div className="flex justify-center mt-4 mb-10">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`py-2 px-4 mr-2 rounded ${
                    currentPage === 1
                      ? "bg-red-200 text-red-600 cursor-not-allowed"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={goToNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(csvData.slice(1).length / rowsPerPage)
                  }
                  className={`py-2 px-4 rounded ${
                    currentPage ===
                    Math.ceil(csvData.slice(1).length / rowsPerPage)
                      ? "bg-red-200 text-red-600 cursor-not-allowed"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
