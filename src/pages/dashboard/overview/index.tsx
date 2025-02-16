import React, { useEffect, useState } from "react";
import DashboardLayout from "../DashboardLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topbar from "@/dashboard/components/topbar";
import { GetRequests } from "@/utils/requests";
import Loading from "@/common/loading";

const Overview = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    const getOrders = async () => {
      const res = await GetRequests("/metrics", token);
      if (res?.status === 200) {
        setMetrics(res?.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  //

  return (
    <DashboardLayout>
      <section className="sections">
        <Topbar title="Overview" subtitle="View your dashboard metrics" />

        <div className="overview">
          <div className="summary">
            <div className="row p-2">
              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Total Orders</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0">{metrics?.totalOrders}</h4>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Delivered Orders</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0">{metrics?.deliveredOrders}</h4>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Pending Delivery Orders</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0">{metrics?.pendingOrders}</h4>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Successful Payments</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0"> {metrics?.transactions}</h4>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Pending Payments</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0"> {metrics?.pendingPayment}</h4>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 columns">
                <div className="card">
                  <p>Addresses</p>
                  <div className="card-count">
                    {loading ? (
                      <Loading
                        height="30px"
                        width="30px"
                        primaryColor="#27493e"
                        secondaryColor="#27493e"
                      />
                    ) : (
                      <h4 className="mb-0"> {metrics?.userAddress}</h4>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Overview;
