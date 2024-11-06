const getNewNode = () => {
  return {
    id: undefined,
    position: { x: 0, y: 0 },
    data: { label: "", bgColor: "", color: "" },
    type: "customNode",
  };
};

export default getNewNode;
