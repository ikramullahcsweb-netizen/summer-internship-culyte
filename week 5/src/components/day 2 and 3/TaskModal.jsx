import React, { useState } from "react";
import { Button } from "@day2/ui/button";
import { Input } from "@day2/ui/input";
import path from "node:path";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@day2/ui/dialog";


export default function TaskModal() {
  // --- Business Logic & State ---
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    // Business logic: Add task to list
    setTasks([...tasks, taskName]);
    setTaskName("");
    setIsOpen(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Shadcn Integration</h2>
      
      {/* Dialog Component using Shadcn UI */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Add New Task</Button>
        </DialogTrigger>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Task</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAddTask} className="space-y-4 pt-2">
            <Input 
              placeholder="Enter task description..." 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Task.</Button>
            </div>
          </form>
        </DialogContent>
       </Dialog>

      {/* Displaying tasks (Business logic output) */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Task List:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-sm">No tasks added yet.</p>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className="text-sm">{task}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}