import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import style from "./info.module.css";

export default function Info() {
  return (
    <div className={style.main}>
      <div>
        <h1>Servers</h1>
        <ul>
          <li>
            Logged in users can create, edit and delete their own servers
            (Owner)
          </li>
          <li>
            Logged in users can join and leave servers (Member) Servers will
          </li>
          <li>include all channels made in them</li>
        </ul>
      </div>
      <div>
        <h1>Channels</h1>
        <ul>
          <li>
            Logged in users can create, edit and delete their own servers
            channels (Owner)
          </li>
          <li>
            Logged in users can view and message inside of servers channels
            (Member/Owner)
          </li>
        </ul>
      </div>
      <div>
        <h1>Messages</h1>
        <ul>
          <li>
            Logged in users can create, edit and delete their own messages in
            any server they own or are a member of (Owner/Member)
          </li>
          <li>
            Anytime a message is sent the live chat is updated for all users
          </li>
        </ul>
      </div>
      <div>
        <h1>Direct Messaging</h1>
        <ul>
          <li>
            Users can create private servers between them and another user to
            direct message them
          </li>
          <li>Users can view messages sent between them and another user </li>
        </ul>
      </div>
    </div>
  );
}
