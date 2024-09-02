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
import { ExitIcon } from "../../reusable/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiSelect } from "primereact/multiselect";


const SearchTable = () => {
    const columnHelper = createColumnHelper();
    const dispatch = useDispatch();
    const navigate = useNavigate();
 


    const { allUsers } = useSelector((state) => state?.user);

    const data =
        allUsers?.map((user) => ({
            name: `${user.first_name} ${user.last_name}`,
            // mobile: user.mobile_number,
            // rate: user.hourly_rate,
            id: user.custom_id,
            medical: user.medical_id,
            shift: user.availability,
            location: user.location || user.location,
            clinicShift: user.hospital_name,
            preferred_specialities: user.preferred_specialities,
        })) || [];

        useEffect(() => {
            if (!allUsers?.length) {
                dispatch(getAllDoctors());
            }
        }, [dispatch, allUsers]);

    const path = window.location.pathname;

    const specialty = path.split("/").pop();

    const location2 = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location2]);

 

    const NameFormatter = ({ row }) => {
        return (
            <div className="name-main">
                <div className="img-border">
                    <img src={boy} alt="boy" />
                </div>
                <div
                    className="name-data"
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                    {row?.original?.name
                        ? row?.original?.name?.length > 20
                            ? row?.original?.name?.slice(0, 20) + "..."
                            : row?.original?.name
                        : "Not Available"}
                    <div className="sm-data-name" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                        {row?.original?.preferred_specialities
                            ? row?.original?.preferred_specialities.join(", ").length > 15
                                ? row?.original?.preferred_specialities
                                    .join(", ")
                                    .slice(0, 15) + "..."
                                : row?.original?.preferred_specialities.join(", ")
                            : "Not Available"}
                    </div>
                </div>
            </div>
        );
    };

    const ShiftFormatter = ({ row }) => {
        return (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {row?.original?.shift
                    ? row?.original?.shift.join(", ").length > 20
                        ? row?.original?.shift.join(", ").slice(0, 20) + "..."
                        : row?.original?.shift.join(", ")
                    : "Not Available"}
            </div>
        );
    };

    const ActionFormatter = ({ row }) => {

        const userId = row.original?.id;

        // console.log("Row data:", row.original); 
        return (
            <div style={{ cursor: "pointer" }}
                onClick={() => navigate(`/profile/${userId}`)} >

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" fill="#FAFAFA" stroke="#0866C6" />
                    <rect opacity="0.3" x="9.43555" y="16.8206" width="1.64102" height="7.38461" rx="0.820512" transform="rotate(-90 9.43555 16.8206)" fill="#0866C6" />
                    <path d="M15.4204 20.3429C15.0999 20.6634 15.0999 21.1829 15.4204 21.5033C15.7408 21.8238 16.2603 21.8238 16.5807 21.5033L21.5038 16.5803C21.8144 16.2696 21.8253 15.7695 21.5285 15.4456L17.0157 10.5225C16.7094 10.1885 16.1904 10.1659 15.8564 10.4721C15.5223 10.7784 15.4998 11.2974 15.806 11.6314L19.7879 15.9754L15.4204 20.3429Z" fill="#0866C6" />
                </svg>

            </div>
        );
    };
    

    // const columns = [
    //     columnHelper.accessor("name", {
    //         id: "name",
    //         // cell: (info) => info.getValue(),
    //         cell: ({ row }) => {
    //             return <NameFormatter row={row} />;
    //         },
    //         header: () => "Name",
    //         minWidth: 300,
    //         enableSorting: false,
    //     }),
    //     // columnHelper.accessor("mobile", {
    //     //     id: "mobile",
    //     //     cell: (info) => info.getValue(),
    //     //     header: () => "Mobile No.",
    //     //     enableSorting: false,
    //     // }),
    //     // columnHelper.accessor("rate", {
    //     //     id: "rate",
    //     //     cell: (info) => info.getValue(),
    //     //     header: () => "Rate/Hrs",
    //     //     enableSorting: false,
    //     // }),
    //     columnHelper.accessor("shift", {
    //         id: "shift",
    //         // cell: (info) => info.getValue(),
    //         cell: ({ row }) => {
    //             return <ShiftFormatter row={row} />;
    //         },
    //         header: () => "Shift",
    //         enableSorting: false,
    //     }),
    //     columnHelper.accessor("medical", {
    //         id: "medical",
    //         cell: (info) => info.getValue(),
    //         header: () => "Medical Id",
    //         enableSorting: false,
    //     }),
    //     columnHelper.accessor("location", {
    //         id: "location",
    //         cell: (info) => info.getValue(),
    //         header: () => "Location",
    //         enableSorting: false,
    //     }),
    //     columnHelper.accessor("clinicShift", {
    //         id: "clinicShift",
    //         cell: (info) => info.getValue(),
    //         header: () => "Hospital Name",
    //         enableSorting: false,
    //     }),
    //     columnHelper.accessor("actions", {
    //         id: "actions",
    //         // cell: (info) => info.getValue(),
    //         cell: ({ row }) => {
    //             return <ActionFormatter row={row} />;
    //         },
    //         header: () => "",
    //         enableSorting: false,
    //     }),
    // ];

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
            cell: (info) => info.getValue(),
            header: () => "Medical Id",
            enableSorting: false,
        }),
        columnHelper.accessor("location", {
            id: "location",
            cell: (info) => info.getValue(),
            header: () => "Location",
            enableSorting: false,
        }),
        columnHelper.accessor("clinicShift", {
            id: "clinicShift",
            cell: (info) => info.getValue(),
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


    // const tableInstance = useReactTable({
    //     columns,
    //     data,
    //     getCoreRowModel: getCoreRowModel(),
    //     getSortedRowModel: getSortedRowModel(),
    // });

    const memoizedData = useMemo(() => data, [data]);

    // Now call useReactTable directly
    const tableInstance = useReactTable({
        columns,
        data: memoizedData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const { getHeaderGroups, getRowModel } = tableInstance;

 

    return (
        <>
            <div className="explore-search-main-parent-table">
                {/* <div className="search-box">
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
                             <MultiSelect
                className="login-input-Speciality"
                name="availability"
                value={availability}
                options={specialties}
                onChange={handleAvailabilityChange}
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
                </div> */}
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
                        <thead>
                            {getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className={header?.id}>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
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
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
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
                            // onClick={() => (window.location.href = "/register")
                                
                            // }
                        >
                            {" "}
                            Sign In
                        </button>
                    </div>
                    <div className="join-box-right">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/e03b/1f57/be017111c9382d74d73ac1d1b55afa0c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LqkNy64DZprRoQW~Tw7fpA2s5~-fNegwfY508CBcZ6LHc4DRKbx8Bj0evpQs-s4u~jRTmeIspYgvIoQsddX3ZNtN8EhGXOmwjNwidGmH56SiK5q3AaH1avdG1foOvECiS7Rg~oTLgyMKukmJtut1y3vjMkafXvPJUy0cdoor9s0yj6rQYeolMTpnoS4t1uBGy1ZuPUuQh62-QeNQkY5QI2qgKfwTsqxTNjHck3RWD0nrj4pV3MQ8BGAkmcYzF7BBj7Nq0YgDzZwKwj1oKd~GYW576yVCg7WHtPBZlZ2qg0TVkyS4WRab3QhKkCkpA6K6WJccZqOcJsuKhEjFxLreFQ__"
                            alt="hand"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchTable;
