import React from "react";
import {
  Home,
  Users,
  Mail,
  Phone,
  FileText,
  Layers,
  BarChart3,
  List,
  ClipboardList,
  HelpCircle,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

const icons = [
  Home,
  Users,
  Mail,
  Phone,
  FileText,
  Layers,
  List,
  BarChart3,
  ClipboardList,
];

const bottomIcons = [HelpCircle, Settings];

const Sidebar = () => {
  const activeIndex = 0;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">◎</div>
        <nav className="sidebar-icons">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`sidebar-icon ${index === activeIndex ? "active" : ""}`}
            >
              <Icon size={20} />
            </div>
          ))}
        </nav>
      </div>
      <div className="sidebar-bottom">
        {bottomIcons.map((Icon, i) => (
          <div className="sidebar-icon" key={i}>
            <Icon size={20} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
