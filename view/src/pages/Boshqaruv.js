import React from "react";
// import "../styles/boshqaruv.css";

export default function Boshqaruv() {
  return (
    <div>
      {" "}
      <div class="message"></div>
      <section class="boshqaruv">
        <div class="c-head">Admin Panel</div>
        <div class="c-body">
          <div class="admin-panel <%= user.type %>">
            <div class="users-tag">
              <h3>Users</h3>
              <div class="methods">
                <div>View</div>
                <div>Add</div>
                {/* <% if(user.type!="admin" ) {%> */}
                <div>Update</div>
                <div>Delete</div>
                {/* <% } %> */}
              </div>
            </div>
            <div class="articles-tag">
              <h3>Articles</h3>
              <div class="methods">
                <div>View</div>
                <div>Add</div>
                {/* <% if(user.type!="admin" ) {%> */}
                <div>Update</div>
                <div>Delete</div>
                {/* <% } %> */}
              </div>
            </div>
            <div class="audio-tag">
              <h3>Audio</h3>
              <div class="methods">
                <div>View</div>
                <div>Add</div>
                {/* <% if(user.type!="admin" ) {%> */}
                <div>Update</div>
                <div>Delete</div>
                {/* <% } %> */}
              </div>
            </div>
            <div class="news-tag">
              <h3>News</h3>
              <div class="methods">
                <div>View</div>
                <div>Add</div>
                {/* <% if(user.type!="admin" ) {%> */}
                <div>Update</div>
                <div>Delete</div>
                {/* <% } %> */}
              </div>
            </div>
            <div class="lessons-tag">
              <h3>Lessons</h3>
              <div class="methods">
                <div>View</div>
                <div>Add</div>
                {/* <% if(user.type!="admin" ) {%> */}
                <div>Update</div>
                <div>Delete</div>
                {/* <% } %> */}
              </div>
            </div>
          </div>
          <div class="admin-view"></div>
        </div>
      </section>
    </div>
  );
}