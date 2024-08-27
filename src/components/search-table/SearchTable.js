import React, { useEffect } from "react";
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { createColumnHelper } from "@tanstack/react-table";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/apiSlice";

const SearchTable = () => {
    const columnHelper = createColumnHelper();
    const dispatch = useDispatch();

    const { allUsers } = useSelector((state) => state?.user);

    // Ensure `data` is always defined as an array, even if `allUsers` is undefined
    const data = allUsers?.map((user) => ({
        name: `${user.first_name} ${user.last_name}`,
        mobile: user.mobile_number,
        rate: user.hourly_rate,
        shift: user.availability,
        location: user.location || user.location,
        clinicShift: "N/A"
    })) || [];

    useEffect(() => {
        
        dispatch(getAllDoctors());
    }, [dispatch]);



    // const data = [
    //     {
    //         name: "Dr. Abhishek Saha ",
    //         mobile: "9284578666 ",
    //         rate: " $100 / hr",
    //         shift: "Morning Shift",
    //         location: "Thane",
    //         clinicShift: "Morning Shift",
    //     },

    // ];

    const specialties = [
        "Abdominal Radiology",
        "Abdominal Surgery",
        "Addiction Medicine",
        "Addiction Psychiatry",
        "Adolescent Medicine",
        "Adult Congenital Heart Disease",
        "Adult Reconstructive Orthopedics",
        "Advanced Heart Failure and Transplant Cardiology",
        "Aerospace Medicine",
        "Allergy",
        "Allergy/Immunology",
        "Anatomic Pathology",
        "Anatomic/Clinical Pathology",
        "Anesthesiology",
        "Anesthesiology Critical Care Medicine",
        "Behavioral and Cognitive Psychology",
        "Bloodbanking/Transfusion Medicine",
        "Brain Injury Medicine",
        "Burn Surgery",
        "Cardiac Electrophysiology",
        "Cardiothoracic Radiology",
        "Cardiothoracic Surgery",
        "Cardiovascular Diseases",
        "Women's Imaging",
        "Wound Care",
    ];

    const title = [
        "Any",
        "Physician",
        "Assistant",
        "CCP",
        "CNM",
        "CNS",
        "CRNA",
        "DNAP",
        "DNP",
        "DPM",
        "LCSW",
        "NP",
        "Other",
        "PA",
        "PhD",
        "PsyD",
        "SFA",
        "Student",
    ];

    const location = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Kolkata",
        "Chennai",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
    ];



    const columns = [
        columnHelper.accessor("name", {
            id: "name",
            cell: (info) => info.getValue(),
            header: () => "Name",
            minWidth: 300,
            enableSorting: false,
        }),
        columnHelper.accessor("mobile", {
            id: "mobile",
            cell: (info) => info.getValue(),
            header: () => "Mobile No.",
            enableSorting: false,
        }),
        columnHelper.accessor("rate", {
            id: "rate",
            cell: (info) => info.getValue(),
            header: () => "Rate/Hrs",
            enableSorting: false,
        }),
        columnHelper.accessor("shift", {
            id: "shift",
            cell: (info) => info.getValue(),
            header: () => "Shift",
            enableSorting: false,
        }),
        columnHelper.accessor("location", {
            id: "location",
            cell: (info) => info.getValue(),
            header: () => "Clinic/Hospital Location",
            enableSorting: false,
        }),
        columnHelper.accessor("clinicShift", {
            id: "clinicShift",
            cell: (info) => info.getValue(),
            header: () => "Clinic/Hospital Name",
            enableSorting: false,
        }),
    ];

    const tableInstance = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const { getHeaderGroups, getRowModel } = tableInstance;

    return (
        <>
            <div className="explore-search-main-parent-table">
                <div className="search-box">
                    <div className="quick">Quick Locum search</div>
                    <div className="drop-search">
                        <div>
                            <Dropdown
                                className="login-input"
                                name="title"
                                options={title}
                                placeholder="Category"
                            />
                        </div>
                        <div>
                            <Dropdown
                                className="login-input-Speciality"
                                name="speciality"
                                options={specialties}
                                placeholder="Speciality..."
                            />
                        </div>
                        <div>
                            <Dropdown
                                className="login-input-Speciality"
                                name="speciality"
                                options={location}
                                placeholder="Location..."
                            />
                        </div>
                        <div className="search-fil">Search</div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="search-exp-table">
                    <table>
                        <thead>
                            {getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className={header?.id}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {header.column.getCanSort() ? (
                                                <span>
                                                    {header.column.getIsSorted()
                                                        ? header.column.getIsSortedDesc()
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
                    </table>
                </div>
            </div>
        </>
    );
};

export default SearchTable;
