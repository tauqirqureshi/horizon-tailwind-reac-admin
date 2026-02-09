/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Links = ({ routes }) => {
  const location = useLocation();

  const activeRoute = (routePath) => {
    return location.pathname.includes(routePath);
  };

  return routes.map((route, index) => {
    // =========================
    // COLLAPSIBLE (SUB ROUTES)
    // =========================
    if (route.collapse) {
      const isOpen = route.items.some((item) =>
        activeRoute(item.path)
      );

      return (
        <li key={index} className="mb-2">
          {/* Parent */}
          <div
            className={`flex cursor-pointer items-center justify-between px-4 py-3 transition-colors ${
              isOpen
                ? "text-brand-500"
                : "text-navy-700 dark:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              {route.icon}
              <span className="font-medium">{route.name}</span>
            </div>
            <MdKeyboardArrowDown
              className={`transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Children */}
          <ul className="ml-6 mt-2 border-l border-gray-200 dark:border-white/10">
            {route.items.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={`${item.layout}/${item.path}`}
                  className={({ isActive }) =>
                    `flex items-center pl-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-500"
                        : "text-navy-700 dark:text-white/70 hover:text-brand-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    // =========================
    // NORMAL ROUTES
    // =========================
    return (
      <li key={index}>
        <NavLink
          to={`${route.layout}/${route.path}`}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 font-medium transition-colors ${
              isActive
                ? "text-brand-500"
                : "text-navy-700 dark:text-white"
            }`
          }
        >
          {route.icon}
          {route.name}
        </NavLink>
      </li>
    );
  });
};

export default Links;
