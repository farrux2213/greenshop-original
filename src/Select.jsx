import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
const Selectt = () => (
  <Select
    showSearch
    placeholder="Select a variety"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: "expensive sorting",
        label: "Expensive sorting",
      },
      {
        value: "default sorting",
        label: "Default sorting",
      },
      {
        value: "cheap sorting",
        label: "Cheap sorting",
      },
    ]}
  />
);
export default Selectt;
