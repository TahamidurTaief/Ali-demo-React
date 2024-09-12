import React from "react";

function BlogSection() {
  return (
    <>
      <div className="container">
        <div className="block-section">
          <div className="blog-title">
            <h2>
              Consultez nos<br />dernières activités
            </h2>
          </div>

          <div className="row mt-5 pt-5 d-flex">
            <div className="col-3  blog-box">
              <div className="blog-img"></div>
              <div className="date-comment mt-2 mx-2">
                <div className="date">
                <i class="fa-solid fa-calendar-days"></i> October 19, 2020
                </div>

                <div className="blog-comment">
                <i class="fa-solid fa-comment"></i> Comments (05)
                </div>
              </div>
              <div className="blog-detail-title mx-2"><h2>Offer expert advice and solutions to help organizations</h2></div>
                <div className="read-more-btn mx-2"><button>Read More &nbsp;&nbsp; <i class="fa-solid fa-arrow-right"></i></button></div>
            </div>


            <div className="col-3 blog-box">
              <div className="date-comment mt-1 mx-2">
                <div className="date">
                <i class="fa-solid fa-calendar-days"></i> October 19, 2021
                </div>

                <div className="blog-comment">
                <i class="fa-solid fa-comment"></i> Comments (05)
                </div>
              </div>
              <div className="blog-detail-title mx-2"><h2>Business consultants offer expert advice and solutions </h2></div>
                <div className="read-more-btn mx-2"><button>Read More &nbsp;&nbsp; <i class="fa-solid fa-arrow-right"></i></button></div>
                <div className="blog-img mt-3"></div>
            </div>





            <div className="col-3 blog-box">
              <div className="blog-img"></div>
              <div className="date-comment mt-2 mx-2">
                <div className="date">
                <i class="fa-solid fa-calendar-days"></i> October 19, 2023
                </div>

                <div className="blog-comment">
                <i class="fa-solid fa-comment"></i> Comments (05)
                </div>
              </div>
              <div className="blog-detail-title mx-2"><h2>to help organizations improve operations, solve challenges</h2></div>
                <div className="read-more-btn mx-2"><button>Read More &nbsp;&nbsp; <i class="fa-solid fa-arrow-right"></i></button></div>
            </div>




            <div className="col-3 blog-box">
              <div className="date-comment mt-1 mx-2">
                <div className="date">
                <i class="fa-solid fa-calendar-days"></i> October 19, 2020
                </div>

                <div className="blog-comment">
                <i class="fa-solid fa-comment"></i> Comments (05)
                </div>
              </div>
              <div className="blog-detail-title mx-2"><h2>Offer expert advice and solutions to help organizations</h2></div>
                <div className="read-more-btn mx-2"><button>Read More &nbsp;&nbsp; <i class="fa-solid fa-arrow-right"></i></button></div>
                <div className="blog-img mt-3"></div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
