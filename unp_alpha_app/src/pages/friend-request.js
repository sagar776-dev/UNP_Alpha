import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Descriptions } from "antd";
import env from "../environment.json";

import { useCookies } from "react-cookie";

function FriendRequest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [parents, setParents] = useState([]);
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);

  const [cookies, setCookie] = useCookies(["user"]);

  const config = {
    headers: {
      Authorization: cookies.token,
    },
  };

  useEffect(() => {
    getData()
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setParents(result.parents);
          setFriends(result.friends);
          setRequests(result.requests);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let getData = async () => {
    console.log("Headers ", config);
    let user = cookies.user;
    return await axios.get(
      `${env.backendUrl}api/request/getParentsNearby/${user.location}&${user.email}`,
      config
    );
  };

  const sendRequest = (e) => {
    //e.preventDefault();
    console.log(e);
    let userdata = cookies.user;
    let body = {
      from: userdata.id,
      to: e.id,
      status: "P",
      since: null,
    };
    axios
      .post("http://localhost:8080/api/request/sendRequest", body, config)
      .then((res) => {
        console.log(res);
      });
  };

  const acceptRequest = (e)=>{
    axios.post(`${env.backendUrl}api/request/acceptRequest`, e, config)
    .then((res)=>{
      console.log(res);
    });
  }

  const rejectRequest = (e)=>{
    axios.post(`${env.backendUrl}api/request/rejectRequest`, e, config)
    .then((res)=>{
      console.log(res);
    });
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <h2>Parents Nearby</h2>
          <table class="table request-table">
            <thead>
              <th>Name</th>
              <th>Location</th>
              <th>Send Request</th>
            </thead>
            <tbody>
              {parents.map((parent) => (
                <tr style={{ padding: "5px" }}>
                  <td>{parent.first_name + " " + parent.last_name}</td>
                  <td>{parent.location}</td>
                  <td>
                    <button
                      class="btn btn-success btn-sml"
                      onClick={() => sendRequest(parent)}
                    >
                      Send
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2>Friends</h2>
          <table class="table request-table">
            <thead>
              <th>Name</th>
              <th>Status</th>
            </thead>
            <tbody>
              {friends.map((friend) => (
                <tr style={{ padding: "5px" }}>
                  <td>{friend.toName}</td>
                  <td>{friend.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2>Requests</h2>
          <table class="table request-table">
            <thead>
              <th>Name</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Reject</th>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr style={{ padding: "5px" }}>
                  <td>{request.first_name + " " + request.last_name}</td>
                  <td>{request.status}</td>
                  <td>
                    <button
                      class="btn btn-success btn-sml"
                      onClick={() => acceptRequest(request)}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      class="btn btn-success btn-sml"
                      onClick={() => rejectRequest(request)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FriendRequest;
