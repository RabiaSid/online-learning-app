import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { List, Skeleton, Input, Divider } from "antd";
import { fbGet } from "../../../config/firebase/firebase-methods";

export default function DataList() {
  const [userList, setUserList] = useState<any>([]);
  const [searchfirstName, setSearchfirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const GetuserList = () => {
    fbGet("users")
      .then((res: any) => {
        console.log(res);
        setUserList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetuserList();
  }, []);

  const filteruserList = () => {
    if (!userList || userList.length === 0 || searchfirstName === "") {
      return userList;
    }

    return userList.filter((item: any) => {
      const firstName = item?.firstName || ""; // Ensure firstName is not undefined

      // Check for a valid first name and perform a case-insensitive search
      return firstName.toLowerCase().includes(searchfirstName.toLowerCase());
    });
  };
  // const filteruserList = () => {
  //   if (searchfirstName === "") {
  //     return userList;
  //   }
  //   return userList.filter((item: any) =>
  //     item.firstName.toLowerCase().includes(searchfirstName.toLowerCase())
  //   );
  // };

  const loadMoreData = () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);
  };

  useEffect(() => {
    loadMoreData();
  }, [hasMore]);

  const handlefirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchfirstName(event.target.value);
  };

  return (
    <div className="scrollable-container" id="scrollableDiv">
      <InfiniteScroll
        dataLength={userList.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          header={
            <div className="row d-flex justify-content-between">
              <div className="col-3">Header</div>
              <div className="col-6">
                <Input
                  className="search"
                  placeholder="Search by first name"
                  value={searchfirstName}
                  onChange={handlefirstNameChange}
                />
              </div>
            </div>
          }
          dataSource={filteruserList()}
          renderItem={(item: any, i: number) => (
            <List.Item key={i} className="py-1 px-2">
              <List.Item.Meta
                avatar={
                  <img
                    src={
                      item.Image
                        ? item.Image
                        : "data:image/jpeg;base64,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"
                    }
                    style={{ height: "6vh", width: "6vh" }}
                  />
                }
                description={item.subject}
                title={`${
                  item?.firstName &&
                  item.firstName.charAt(0).toUpperCase() +
                    item.firstName.slice(1)
                }`}
              />
              <div>{item.role}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
}
