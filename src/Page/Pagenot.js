import React from "react";

function Pagenot() {
  return (
    <>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mt-5">
        <main class="px-3 mt-5 ">
          <h1 className="d-flex justify-content-center">Page Not Found</h1>
          <p class="lead d-flex justify-content-center">
            Recheck the URL to ensure you entered the correct website address in
            the search bar.
          </p>
          <p class="lead d-flex justify-content-center">
            <a href="/login" class="btn btn-lg fw-bold border-white bg-primary ">
              Home page
            </a>
          </p>
        </main>
      </div>
    </>
  );
}

export default Pagenot;
