// menu links
export const getMenuLinks = ({ orders }) => orders.menuLinks;

// sorting parameters
export const getSortParams = ({ orders }) => orders.sortParams;

// productions
export const getAllProductions = ({ orders }) => orders.allProductions;
export const getCurrentProductions = ({ orders }) => orders.currentProductions;
export const getFinishedProductions = ({ orders }) =>
  orders.finishedProductions;
export const getTransportedProductions = ({ orders }) =>
  orders.transportedProductions;
export const getCanceledProductions = ({ orders }) =>
  orders.canceledProductions;

// requests
export const getUpdateRequest = ({ orders }) => orders.updateRequest;
export const getRequest = ({ orders }) => orders.request;
