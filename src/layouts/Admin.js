import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Products from "views/admin/Products.js";
import ProductCreate from "views/admin/ProductCreate.js";
import ProductDetail from "views/admin/ProductDetail.js";
import Colors from "views/admin/Colors.js";
import Styles from "views/admin/Styles.js";
import Categories from "views/admin/Categories.js";
import Materials from "views/admin/Materials.js";
import Types from "views/admin/Types.js";
import Orders from "views/admin/Orders.js";
import OrderDetail from "views/admin/OrderDetail.js";
import Users from "views/admin/Users.js";
import UserDetail from "views/admin/UserDetail.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        {/* <AdminNavbar /> */}
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/products" exact component={Products} />
            <Route
              path="/admin/products/create"
              exact
              component={ProductCreate}
            />
            <Route
              path="/admin/products/:productId"
              exact
              component={ProductDetail}
            />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/users/:userId" exact component={UserDetail} />
            <Route path="/admin/categories" exact component={Categories} />
            <Route path="/admin/colors" exact component={Colors} />
            <Route path="/admin/types" exact component={Types} />
            <Route path="/admin/styles" exact component={Styles} />
            <Route path="/admin/materials" exact component={Materials} />
            <Route path="/admin/orders" exact component={Orders} />
            <Route
              path="/admin/orders/:orderId"
              exact
              component={OrderDetail}
            />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
