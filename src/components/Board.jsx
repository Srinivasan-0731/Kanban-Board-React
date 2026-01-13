import { DndContext } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import Column from "./Column";


const Board = () => {
    const { columns, setColumns } = useTasks();

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const { taskId, columnId: sourceColumnId } = active.data.current;
        const destinationColumnId = over.id;

        if (sourceColumnId === destinationColumnId) return;

        setColumns(prev => {
            const task = prev[sourceColumnId].items.find(item => item.id === taskId);

            return {
                ...prev,
                [sourceColumnId]: {
                    ...prev[sourceColumnId],
                    items: prev[sourceColumnId].items.filter(item => item.id !== taskId)
                },
                [destinationColumnId]: {
                    ...prev[destinationColumnId],
                    items: [...prev[destinationColumnId].items, task],
                },
            };
        });

    };

    return (

        <DndContext onDragEnd={handleDragEnd}>
            <div className="flex gap-6">

                {Object.keys(columns).map(columnId => (
                    <Column
                        key={columnId}
                        columnId={columnId}
                        column={columnId}
                    />
                ))}
            </div>
        </DndContext>
    );
}

export default Board;