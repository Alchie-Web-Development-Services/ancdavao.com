import { useMy } from "@/context/MyContext";
import Link from "next/link";
import React from "react";
import {
  FaRegUserCircle,
  FaRegCalendarAlt,
  FaGlobe,
  FaLanguage,
  FaRegEnvelope,
} from "react-icons/fa";
import { countries } from "@/utils/constant/countries";

const MyAccountContent = () => {
  const { userProfile } = useMy();

  const country = countries.find((c) => c.code === userProfile?.country);

  return (
    <main className="md:col-span-3 bg-white rounded-lg shadow-md p-8 relative">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Personal information{" "}
        <Link
          href="/my/account/edit"
          className="underline absolute right-8 text-sm"
        >
          Edit
        </Link>
      </h2>
      <p className="text-gray-600 mb-8">
        Manage your personal information, including phone numbers and email
        address where you can be contacted.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Name</h3>
            <FaRegUserCircle className="text-gray-500" />
          </div>
          <p className="text-gray-700">
            {userProfile?.firstName} {userProfile?.lastName}
          </p>
        </div>

        {/* Phone Number */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Phone Number</h3>
            <FaRegCalendarAlt className="text-gray-500" />
          </div>
          <p className="text-gray-700">{userProfile?.phoneNumber || "N/A"}</p>
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Address</h3>
            <FaGlobe className="text-gray-500" />
          </div>
          <p className="text-gray-700">{userProfile?.address || "N/A"}</p>
        </div>

        {/* City */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">City</h3>
            <FaLanguage className="text-gray-500" />
          </div>
          <p className="text-gray-700">{userProfile?.city || "N/A"}</p>
        </div>

        {/* Country */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Country</h3>
            <FaGlobe className="text-gray-500" />
          </div>
          <p className="text-gray-700">{country?.name || "N/A"}</p>
        </div>

        {/* Postal Code */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Postal Code</h3>
            <FaRegEnvelope className="text-gray-500" />
          </div>
          <p className="text-gray-700">{userProfile?.postalCode || "N/A"}</p>
        </div>
      </div>
    </main>
  );
};

export default MyAccountContent;
