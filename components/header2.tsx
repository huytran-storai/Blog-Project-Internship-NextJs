import React, { useState, useRef, useEffect } from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import SearchForm2 from "./_child/searchForm2";
import { useOnClickOutside } from "usehooks-ts";

export default function header2() {
  const inputRef = useRef<any>();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  useOnClickOutside(inputRef, () => setShowSearchForm(false));

  return (
    <>
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 relative ">
            <input
              type="text"
              className="input-text "
              placeholder="Search...."
              ref={inputRef}
              onClick={() => setShowSearchForm(true)}
              value={searchValue}
              onChange={handleSearchChange}
            />
            {showSearchForm ? (
              <div className="input-form" ref={inputRef}>
                <SearchForm2 searchValue={searchValue} />
              </div>
            ) : null}
          </div>
          <div className="shrink w-80 sm:order-2">
            <Link href={"/"}>
              <span className="font-bold uppercase">Stor.AI</span>
            </Link>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              <Link href={"/"}>
                <ImFacebook color="#888888" />
              </Link>
              <Link href={"/"}>
                <ImTwitter color="#888888" />
              </Link>
              <Link href={"/"}>
                <ImYoutube color="#888888" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
