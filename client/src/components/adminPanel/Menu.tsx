import { Ellipsis, LogOut } from 'lucide-react'

import { cn } from '@/lib/utils';
import { getMenuList } from '@/utils/menuList';
import { Button } from '@/components/ui/button';
import { CollapseMenuButton } from '@/components/adminPanel/CollapseMenuButton';
import { Link } from 'react-router-dom';

interface MenuProps {
    isOpen: boolean;
    pathname: string;
}

export default function Menu({ isOpen, pathname }: MenuProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    const menuList = getMenuList(pathname);

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <nav className="mt-8 h-full w-full">
                <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                    {menuList.map(({ groupLabel, menus }, index) => (
                        <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
                            {isOpen && groupLabel ? (
                                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                                    {groupLabel}
                                </p>
                            ) : !isOpen && groupLabel ? (
                                <div className="w-full flex justify-center items-center">
                                    <Ellipsis className="h-5 w-5" />
                                </div>
                            ) : (
                                <p className="pb-2"></p>
                            )}
                            {menus.map(
                                ({ href, label, icon: Icon, active, submenus }, index) =>
                                    submenus.length === 0 ? (
                                        <div className="w-full" key={index}>
                                            <Button
                                                variant={active ? 'secondary' : 'ghost'}
                                                className="w-full justify-start h-10 mb-1"
                                                asChild
                                            >
                                                <Link to={href}>
                                                    <span className={cn(isOpen ? 'mr-4' : '')}>
                                                        <Icon size={18} />
                                                    </span>
                                                    <p
                                                        className={cn(
                                                            'max-w-[200px] truncate',
                                                            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
                                                        )}
                                                    >
                                                        {label}
                                                    </p>
                                                </Link>
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="w-full" key={index}>
                                            <CollapseMenuButton
                                                icon={Icon}
                                                label={label}
                                                active={active}
                                                submenus={submenus}
                                                isOpen={isOpen}
                                            />
                                        </div>
                                    )
                            )}
                        </li>
                    ))}
                    <li className="w-full grow flex items-end">
                        <Button
                            onClick={() => { }}
                            variant="outline"
                            className="w-full justify-center h-10 mt-5"
                        >
                            <span className={cn(isOpen ? 'mr-4' : '')}>
                                <LogOut size={18} />
                            </span>
                            <p
                                className={cn(
                                    'whitespace-nowrap',
                                    isOpen ? 'opacity-100' : 'opacity-0 hidden'
                                )}
                            >
                                Sign out
                            </p>
                        </Button>
                    </li> 
                </ul>
            </nav>
        </>
    )
}