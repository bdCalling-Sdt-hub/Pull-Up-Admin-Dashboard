/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Table as AntTable, ConfigProvider } from "antd";
// import { paginationThemes2 } from "../../../themes/Index";

export default function Table({
  page,
  total,
  loading,
  onTableChange,
  columns,
  data,
  needPagination,
  Children,
  theme,
  style,
}) {
  const handleSeeAll = (data) => {
    console.log(data);
  };
  //   const combinedTheme = {
  //     components: {
  //       ...theme,
  //       ...paginationThemes2,
  //     },
  //   };

  return (
    <div
      style={{
        // backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div>{Children}</div>
      <ConfigProvider>
        <AntTable
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={
            needPagination && {
              pageSize: page,
              total: total,
            }
          }
          onChange={onTableChange}
        ></AntTable>
      </ConfigProvider>
    </div>
  );
}
