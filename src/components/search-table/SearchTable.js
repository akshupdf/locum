import React, { useEffect, useMemo, useState } from "react";
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/apiSlice";
import boy from "../../assets/boy.png";
import { ExitIcon, ProfileArrow } from "../../reusable/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiSelect } from "primereact/multiselect";
import hand from '../../assets/hand.png'

const SearchTable = ({ data: filteredData  , allUsers}) => {
    const columnHelper = createColumnHelper();
    const navigate = useNavigate();



    const data = (filteredData?.length ? filteredData : allUsers)?.map((user) => ({
        name: `${user.first_name} ${user.last_name}`,
        id: user.custom_id,
        medical: user.medical_id,
        shift: user.availability,
        location: user.location,
        clinicShift: user.hospital_name,
        preferred_specialities: user.preferred_specialities,
        profile_image: user.profile_image
      })) || [];


    const path = window.location.pathname;

    const specialty = path.split("/").pop();

    const location2 = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location2]);

    const truncateText = (text, maxLength) => {
        if (!text) return "Not Available";
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    const joinAndTruncate = (array, maxLength) => {
        if (!array || !array.length) return "Not Available";
        const joinedText = array.join(", ");
        return truncateText(joinedText, maxLength);
    };

    const NameFormatter = React.memo(({ row }) => {
        const { profile_image, name, preferred_specialities } = row?.original || {};
    
        return (
            <div className="name-main">
                <div className="img-border">
                    <img src={profile_image || boy} alt="profile" className="boy-search" />
                </div>
                <div className="name-data" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                    {truncateText(name, 20)}
                    <div className="sm-data-name" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                        {joinAndTruncate(preferred_specialities, 15)}
                    </div>
                </div>
            </div>
        );
    });

    const ShiftFormatter =  React.memo(({ row }) => {
        const { shift } = row?.original || {};
        return (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }} className="shift2">
                {joinAndTruncate(shift, 20)}
            </div>
        );
    });

    const ActionFormatter =  React.memo(({ row }) => {

        const userId = row.original?.id;


        return (
            <div style={{ cursor: "pointer" }}
                onClick={() => navigate(`/profile/${userId}`)} >

             <ProfileArrow />

            </div>
        );
    });

    const MedicalIdFormatter =  React.memo(({ row }) => {
        const { medical } = row?.original || {};
        return (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }} className="medical2">
                {truncateText(medical, 20)}
            </div>
        );
    });

    const LocationFormatter =  React.memo(({ row }) => {
        const { location } = row?.original || {};
        return (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }} className="location2">
                {truncateText(location, 20)}
            </div>
        );
    });

    const HospitalNameFormatter =  React.memo(({ row }) => {
        const { clinicShift } = row?.original || {};
        return (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }} className="clinicShift2">
                {truncateText(clinicShift, 20)}
            </div>
        );
    });


    const columns = useMemo(() => [
        columnHelper.accessor("name", {
            id: "name",
            cell: ({ row }) => <NameFormatter row={row} />,
            header: () => "Name",
            minWidth: 300,
            enableSorting: false,
        }),
        columnHelper.accessor("shift", {
            id: "shift",
            cell: ({ row }) => <ShiftFormatter row={row} />,
            header: () => "Shift",
            enableSorting: false,
        }),
        columnHelper.accessor("medical", {
            id: "medical",
            cell: ({ row }) => <MedicalIdFormatter row={row} />,
            header: () => "Medical Id",
            enableSorting: false,
        }),
        columnHelper.accessor("location", {
            id: "location",
            cell: ({ row }) => <LocationFormatter row={row} />,
            header: () => "Location",
            enableSorting: false,
        }),
        columnHelper.accessor("clinicShift", {
            id: "clinicShift",
            cell: ({ row }) => <HospitalNameFormatter row={row} />,
            header: () => "Hospital Name",
            enableSorting: false,
        }),
        columnHelper.accessor("actions", {
            id: "actions",
            cell: ({ row }) => <ActionFormatter row={row} />,
            header: () => "",
            enableSorting: false,
        }),
    ], []);


    const memoizedData = useMemo(() => data, [data]);

    const tableInstance = useReactTable({
        columns,
        data: memoizedData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const { getHeaderGroups, getRowModel } = tableInstance;

    const TableHeader = React.memo(({ getHeaderGroups }) => (
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={header?.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanSort() ? (
                    <span>
                      {header.column.getIsSorted()
                        ? header.column.getIsSorted() === "desc"
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      ));
      
      const TableBody = React.memo(({ getRowModel }) => (
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ));



    return (
        <>
            <div className="explore-search-main-parent-table">
            </div>
            <div className="d-flex justify-content-center">
                <div className="search-exp-table">
                    <div className="list-head d-flex justify-content-between">
                        <div>
                            <div className="list-name">
                                List of{" "}
                                {specialty?.charAt(0).toUpperCase() + specialty?.slice(1)}{" "}
                                doctors
                            </div>
                            <div className="list-white">{data.length} available doctors</div>
                        </div>
                        <div
                            className="list-btn-search"
                            onClick={() => (window.location.href = "/register")}
                        >
                            Register now
                        </div>
                    </div>
                    <table>
                    <TableHeader getHeaderGroups={getHeaderGroups} />
                    <TableBody getRowModel={getRowModel} />
                    </table>
                </div>
            </div>

            <div className="join-box-main-table">
                <div className="circle"></div>
                <div className="join-box">
                    <div className="join-box-left">
                        <h2>Join our talent</h2>
                        <h2>community.</h2>
                        <p>
                            Join our global talent community to receive alerts when new
                            life-changing opportunities become available.
                        </p>
                        <button
                            className="signup-btn"
                            onClick={() => (window.location.href = "/signin")
                            }
                        >
                            {" "}
                            Sign In
                        </button>
                    </div> 
                    <div className="join-box-right">
                        <img
                            src={hand}
                            alt="hand"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchTable;
