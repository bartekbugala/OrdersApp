// menu links
export const getMenuLinks = ({ productions }) => productions.menuLinks;

// sorting parameters
export const getSortParams = ({ productions }) => productions.sortParams;

// productions
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
export const getUpdateRequest = ({ productions }) => productions.updateRequest;
export const getRequest = ({ productions }) => productions.request;
