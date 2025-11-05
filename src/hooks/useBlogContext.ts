import { useContext } from "react";
import { BlogContext, BlogContextType } from "../context/BlogContext";

export default function useBlogContext(): BlogContextType {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlogContext must be used within an BlogProvider");
  }
  return context;
}
