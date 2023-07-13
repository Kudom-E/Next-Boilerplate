import ComingSoon from "@/components/ComingSoon";
import React from "react";

const Profile = () => {
  return (
    <section className="h-[calc(100vh-11rem)] bg-[rgba(255,255,255,0.5)] backdrop-blur">
      <div className="h-[100%] flex justify-center items-center">
        <ComingSoon theHome="dashboard" />
      </div>
    </section>
  );
};

export default Profile;
