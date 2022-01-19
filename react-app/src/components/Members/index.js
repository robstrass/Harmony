import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import style from "./members.module.css";
import * as serverActions from "../../store/servers";
import { useParams } from "react-router-dom";
import Member from "./member";
export default function Members({ githubs, linkedIns, websites }) {
  const { serverId, channelId } = useParams();
  const dispatch = useDispatch();
  const server = useSelector((state) => state.servers[serverId]);
  const members = useSelector((state) => state.servers[serverId]?.member_list);

  if (!server) dispatch(serverActions.getServersThunk());
  useEffect(() => {}, [githubs, linkedIns, websites]);
  if (githubs) {
    return (
      <aside className={`${style.main} ${style.creatorInfo}`}>
        <div className={style.will}>
          <h3>William Short</h3>
          <a
            href="https://github.com/will-short"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className={style.rob}>
          <h3>Rob Strasser</h3>
          <a
            href="https://github.com/robstrass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className={style.rick}>
          <h3>Rick Arocho</h3>
          <a
            href="https://github.com/codenamerick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </aside>
    );
  } else if (linkedIns) {
    return (
      <aside className={`${style.main} ${style.creatorInfo}`}>
        <div className={style.will}>
          <h3>William Short</h3>
          <a
            href="https://www.linkedin.com/in/will-short/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={style.rob}>
          <h3>Rob Strasser</h3>
          <a
            href="https://www.linkedin.com/in/robstrasser-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={style.rick}>
          <h3>Rick Arocho</h3>
          <a
            href="https://www.linkedin.com/in/rick-arocho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </aside>
    );
  } else if (websites) {
    return (
      <aside className={`${style.main} ${style.creatorInfo}`}>
        <div className={style.will}>
          <h3>William Short</h3>
          <a
            href="https://will-short.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-globe"></i>
          </a>
        </div>
        <div className={style.rob}>
          <h3>Rob Strasser</h3>
          <a
            href="https://robstrass.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-globe"></i>
          </a>
        </div>
        <div className={style.rick}>
          <h3>Rick Arocho</h3>
          <a
            href="https://www.rickarocho.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-globe"></i>
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside className={style.main}>
      <h5>MEMBERS - {members ? members.length : 0}</h5>
      {members?.map((member) => (
        <Member
          key={member.id}
          owner_id={server?.owner_id}
          member={member}
          card={true}
        />
      ))}
    </aside>
  );
}
