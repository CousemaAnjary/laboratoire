import { useState, useRef, useEffect } from 'react';
import KanbanList from './KanbanList';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Kanban() {
  const [lists, setLists] = useState<string[]>(['À faire', 'En cours', 'Terminé']);
  const [isAdding, setIsAdding] = useState(false);
  const [newListTitle, setNewListTitle] = useState('');
  const addListRef = useRef<HTMLDivElement>(null);

  const addList = () => {
    if (newListTitle.trim() !== '') {
      setLists([...lists, newListTitle]);
      setNewListTitle('');
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setNewListTitle('');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (addListRef.current && !addListRef.current.contains(event.target as Node)) {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex space-x-4 p-4 overflow-x-auto items-start">
      {/* Listes Kanban */}
      {lists.map((title, index) => (
        <KanbanList key={index} title={title} />
      ))}

      {/* Formulaire d'ajout de liste */}
      {isAdding ? (
        <Card className="w-72 shrink-0" ref={addListRef}>
          <CardContent className="p-4">
            <Input
              type="text"
              placeholder="Entrez un titre pour cette liste..."
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              autoFocus
              className="mb-4"
            />
            <div className="flex space-x-2">
              <Button onClick={addList} className="w-full">
                Ajouter
              </Button>
              <Button variant="ghost" onClick={handleCancel} className="w-full">
                Annuler
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          variant="outline"
          className="w-72 h-10 shrink-0 justify-start"
          onClick={() => setIsAdding(true)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Ajouter une autre liste
        </Button>
      )}
    </div>
  );
}