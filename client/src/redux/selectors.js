// menu links selectors
export const getMenuLinks = ({ main }) => main.menuLinks;

// sorting selectors
export const getSortParams = ({ sorting }) => sorting.sortParams;

// productions selectors
export const getAllProductions = ({ productions }) =>
  productions.allProductions;
export const getCurrentProductions = ({ productions }) =>
  productions.currentProductions;
export const getFinishedProductions = ({ productions }) =>
  productions.finishedProductions;
export const getTransportedProductions = ({ productions }) =>
  productions.transportedProductions;
export const getCanceledProductions = ({ productions }) =>
  productions.canceledProductions;

// requests
export const getUpdateRequest = ({ requests }) => requests.updateRequest;
export const getRequest = ({ requests }) => requests.request;
