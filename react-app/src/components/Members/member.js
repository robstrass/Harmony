import React, { useState, useEffect, useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import style from "./members.module.css";
import * as serverActions from "../../store/servers";
import profileImage from './assets/sample-profile-img.svg';

export default function Member({ member, owner_id, card }) {
  const { image_url, id, username } = member;
  const session = useSelector(state => state.session);
  const servers = useSelector(state => state.servers);

  const dispatch = useDispatch();
  const history = useHistory();

  const messageCheck = async () => {
    const serversArr = Object.values(servers);
    const rightServer = serversArr.find(server => server.private && server.members.includes(id));
    if (rightServer) {
      history.push(`/servers/@me/${rightServer.id}/${Object.values(rightServer.channels)[0].id}`);
    } else {
      const formData = new FormData();

      formData.append("name", "Your Direct Message");
      formData.append("private", true);
      formData.append("owner_id", session.user.id);

      let server = await dispatch(serverActions.postServerThunk(formData));
      dispatch(serverActions.postPrivateMemberThunk(server.id, id));
      let channel = await dispatch(
        serverActions.postChannelThunk({
          name: "Direct Message",
          server_id: server.id,
        })
      );
      dispatch(serverActions.getServersThunk());
      history.push(`/servers/@me/${server.id}/${channel.id}`)
    }

    document.activeElement.blur()
  }

  return (
    <>
      <div className={style.div1} tabIndex="1">
        <img src={image_url || profileImage} alt="" />
        <span>
          {username}
          {owner_id && id === owner_id && "👑"}
        </span>

        {card && (
          <div className={style.card}>
            <div className={style.membersInnerDiv}>
              <img src={image_url} alt="" />
              <h3>{username}</h3>
            </div>
            {session.user.id !== id && (
              <button
                className={style.memberDMButton}
                onClick={messageCheck}
              >Message</button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
