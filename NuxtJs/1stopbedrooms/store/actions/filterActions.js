export function parseFacetFromQuery({ commit }, query) {
  // console.log(query);
  const facet = [];
  for (const [key, value] of Object.entries(query)) {
    if (key !== "sortBy" && key !== "parPage" && key !== "page") {
      const values = value.split("$");
      facet.push({
        attributeCode: key,
        value: values,
      });
    }
  }
  // console.log(facet);
  commit("SET_FACET", facet);
}

export function parseBadgeFromQuery({ commit, state }, query) {
  const filterBadge = [];
  for (const [key, value] of Object.entries(query)) {
    if (key !== "sortBy" && key !== "parPage" && key !== "page") {
      // console.log(key);
      const values = value.split("$");
      values.forEach((val) => {
        const filter = state.filtersBlock.find((fb) => fb.attrCode === key);
        if (filter) {
          const facet = filter.facets.find((f) => f.attrValue === val);
          if (facet) {
            const badge = {
              attrCode: key,
              attrValue: val,
              attrLabel: facet.attrLabel,
            };
            filterBadge.push(badge);
          }
        }
      });
    }
  }
  // console.log(filterBadge);
  commit("SET_FILTER_BADGE", filterBadge);
}
// export function parseBadgeFromQuery({ commit, state }, query) {
//   const filterBadge = [];
//   for (const [key, value] of Object.entries(query)) {
//     if (key !== "sortBy" && key !== "parPage" && key !== "page") {
//       const values = value.split("$");
//       values.forEach((val) => {
//         const filter = state.filtersBlock.find((fb) => fb.attrCode === key);
//         if (filter) {
//           if (key === "price") {
//             // Directly add price range to badges
//             const badge = {
//               attrCode: key,
//               attrValue: val,
//               attrLabel: `Price: ${val}`,
//             };
//             filterBadge.push(badge);
//           } else {
//             const facet = filter.facets.find((f) => f.attrValue === val);
//             if (facet) {
//               const badge = {
//                 attrCode: key,
//                 attrValue: val,
//                 attrLabel: facet.attrLabel,
//               };
//               filterBadge.push(badge);
//             }
//           }
//         }
//       });
//     }
//   }
//   commit("SET_FILTER_BADGE", filterBadge);
// }

export function handleClearFilters({ commit, dispatch, state }, { router }) {
  // console.log(router);
  commit("SET_FILTER_BADGE", []);
  commit("SET_FACET", []);
  commit("SET_ROUTE_QUERY", {});
  dispatch("updateRoute", { query: {}, router });
}

export function handleRemoveBadge(
  { commit, state, dispatch },
  { attrCode, attrValue, route, router }
) {
  const query = JSON.parse(JSON.stringify(route.query));

  if (query[attrCode]) {
    const values = query[attrCode]
      .split("$")
      .filter((val) => val !== attrValue);
    if (values.length) {
      query[attrCode] = values.join("$");
    } else {
      delete query[attrCode];
    }
  }
  commit("SET_ROUTE_QUERY", query);
  commit(
    "SET_FILTER_BADGE",
    state.filterBadge.filter((b) => b.attrValue !== attrValue)
  );

  dispatch("updateRoute", { query, router });
  dispatch("parseFacetFromQuery", query);
  dispatch("parseBadgeFromQuery", query);
}

export function handleFilterChange(
  { commit, state, dispatch },
  { filter, query, router }
) {
  const { attrCode, attrValue, isChecked } = filter;
  console.log(filter);
  const queryParams = { ...query };

  if (isChecked) {
    // console.log("checkbox checked");
    if (queryParams[attrCode]) {
      const values = queryParams[attrCode].split("$");
      if (!values.includes(attrValue)) {
        values.push(attrValue);
        queryParams[attrCode] = values.join("$");
      }
    } else {
      queryParams[attrCode] = attrValue;
    }
  } else {
    // console.log("checkbox uncheecked");
    if (queryParams[attrCode]) {
      const values = queryParams[attrCode]
        .split("$")
        .filter((val) => val !== attrValue);
      if (values.length) {
        queryParams[attrCode] = values.join("$");
      } else {
        delete queryParams[attrCode];
      }
    }
  }
  commit("SET_ROUTE_QUERY", queryParams);
  commit("SET_FILTER_BADGE", []);
  commit("SET_FACET", []);
  dispatch("updatePage", { page: 1, router }); //set page to 1 because if user is on page 7 and click on filter then it might not such product for that current page
  // dispatch("updateRoute", { query: queryParams, router });
  dispatch("parseFacetFromQuery", queryParams);
  dispatch("parseBadgeFromQuery", queryParams);
}
