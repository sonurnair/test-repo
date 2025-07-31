import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Plus,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
  ChevronDown
} from "lucide-react";
import { leads } from "../data/DummyData";
import "./Dashboard.css";

const stats = [
  { label: "New", value: "127" },
  { label: "Contacted", value: "705k" },
  { label: "Qualified", value: "249k" },
  { label: "Working", value: "57k" },
  { label: "Proposal Sent", value: "1.1k" },
  { label: "Customer", value: "3.7k", color: "green" },
  { label: "Lost Leads", value: "5.2k", color: "red" },
];

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  return (
    <div className="dashboard">
      {/* Topbar */}
      <div className="topbar">
        <div className="searchbar">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>

        <div className="profile-section">
          <div className="profile" onClick={toggleProfileMenu}>
            <img src="https://i.pravatar.cc/36?img=7" alt="User" />
            <div>
              <strong>Pamela Cain</strong>
              <p>pamela@dyson.com</p>
            </div>
            <ChevronDown size={16} />
          </div>

          {showProfileMenu && (
            <div className="profile-dropdown">
              <ul>
                <li>Account</li>
                <li>Billing</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div>
          <h2>Leads Management</h2>
          <p>Organize leads and track their progress effectively here</p>
        </div>
        <div className="actions">
          <button className="btn primary" onClick={handleModalToggle}>
            <Plus size={16} /> New Leads
          </button>
          <button className="btn secondary">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        {stats.map((stat, i) => (
          <div className="stat" key={i}>
            <span className={`label ${stat.color || ""}`}>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="left">
          <button className="btn secondary">
            <Filter size={16} /> Filter
          </button>
          <button className="btn secondary">
            <Download size={16} /> Bulk Actions
          </button>
          <button className="btn secondary">
            <RefreshCcw size={16} />
          </button>
        </div>
        <div className="right">
          <div className="search">
            <Search size={16} />
            <input type="text" placeholder="Search" />
          </div>
          <button className="btn secondary">
            <LayoutList size={16} /> View
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Lead ID</th>
              <th>Customer</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Value</th>
              <th>Tags</th>
              <th>Source</th>
              <th>Assigned</th>
              <th>Status</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td>{lead.id}</td>
                <td><a href="#">{lead.name}</a></td>
                <td>{lead.company}</td>
                <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                <td><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                <td>{lead.value}</td>
                <td>
                  <span className={`tag ${lead.tag.toLowerCase().replace(" ", "-")}`}>
                    {lead.tag}
                  </span>
                </td>
                <td>{lead.source}</td>
                <td><img className="avatar" src={lead.avatar} alt="Assigned" /></td>
                <td>
                  <span className={`status-badge ${lead.status.toLowerCase().replace(/\s/g, "-")}`}>
                    {lead.status}
                  </span>
                </td>
                <td>{lead.created}</td>
                <td><MoreVertical size={16} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination-wrapper">
          <div className="pagination-container">
            <button className="btn secondary prev-btn">
              <ChevronLeft size={16} /> Previous
            </button>
            <div className="pages">
              {[1, 2, 3, "...", 9, 10].map((pg, i) => (
                <button key={i} className="btn page">{pg}</button>
              ))}
            </div>
            <button className="btn secondary next-btn">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Lead</h3>
            <p>Share where you’ve worked on your profile.</p>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name*" />
                <input type="text" placeholder="Company*" />
              </div>
              <div className="form-row">
                <select>
                  <option>US</option>
                  <option>UK</option>
                </select>
                <input type="text" placeholder="Phone*" />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email*" />
                <input type="text" placeholder="Address*" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Country*" />
                <input type="text" placeholder="Lead Value*" />
              </div>
              <div className="form-row">
                <select><option>Select Project Type</option></select>
                <select><option>Select Source</option></select>
              </div>
              <div className="form-row">
                <select><option>Assigned To</option></select>
              </div>
              <textarea placeholder="Description*"></textarea>
              <div className="form-actions">
                <button type="button" onClick={handleModalToggle} className="btn secondary">Cancel</button>
                <button type="submit" className="btn primary">Add Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
