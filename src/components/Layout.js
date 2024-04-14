import React from "react";

function Layout() {
    return (
        <>
            <p className="text-center">2 Span Desktop and Mobile</p>
            <div className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
                <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
            </div>
            <p className="text-center">2 Span Desktop and 1 Span Mobile</p>
            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
                <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
            </div>
            <p className="text-center">3 Span Desktop and 1 Span Mobile</p>
            <div className="m-4 grid gap-4 sm:grid-cols-3">
                <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
                <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
                <div className="min-h-[100px] rounded-lg bg-purple-500 shadow"></div>
            </div>
            <p className="text-center">2 Span Desktop 25/75 and 1 Span Mobile</p>
            <div className="m-4 grid gap-4 sm:grid-cols-12">
                <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
                <div className="sm:col-span-9 min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
            </div>
            <p className="text-center">3 Span Desktop 25/50/25 and 1 Span Mobile</p>
            <div className="m-4 grid gap-4 sm:grid-cols-12">
                <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
                <div className="sm:col-span-6 min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
                <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-purple-500 shadow"></div>
            </div>
        </>
    )
}

export default Layout;