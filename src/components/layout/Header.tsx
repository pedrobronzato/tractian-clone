'use client';
import { navigationItems } from '@/content/Header';
import DropdownButton from '../common/DropdownButton';
import Logo from '../common/logo';
import { useState } from 'react';
import DropdownMenuButton from '../common/DropdownMenuButton';
import GlobeIcon from '@/content/icons/GlobeIcon';
import Button from '../common/Button';
import Link from '../common/Link';
import MenuIcon from '@/content/icons/MenuIcon';

export default function Header() {
    const [selected, setSelected] = useState<string | null>(
        null,
    );


    const handleSelect = (id: string) => {
        setSelected(id);
    };

    return (
        <nav className="duration-default sticky top-0 z-40 flex w-full flex-col items-center justify-center border-b border-slate-200 bg-slate-100 transition-colors ease-in-out">
            <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
                <div className="hidden h-full w-full items-center justify-between lg:flex">
                    <section className="flex items-center gap-x-4">
                        <Logo />
                        {navigationItems.map((item) => (
                            <div
                                className="flex h-[72px] items-center"
                                key={item.id}
                            >
                                <section className="flex h-full items-center pl-4 xl:pl-8">
                                    <DropdownButton
                                        id={item.id}
                                        selected={selected === item.id}
                                        onSelect={handleSelect}
                                        text={item.label}
                                    />
                                </section>
                            </div>
                        ))}
                    </section>
                    <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
                        <DropdownMenuButton
                            icon={<GlobeIcon />}
                            options={[
                                {
                                    id: 'pt',
                                    label: 'Português (Brasil)',
                                    onClick: () => {
                                        console.log('Portuguese');
                                    },
                                },
                                {
                                    id: 'en',
                                    label: 'English (United States)',
                                    onClick: () => {
                                        console.log('English');
                                    },
                                },
                                {
                                    id: 'es',
                                    label: 'Español (México)',
                                    onClick: () => {
                                        console.log('Spanish');
                                    },
                                },
                            ]}
                        />
                        <Link
                            href="https://app.tractian.com/login"
                            className="lg:hidden"
                        >
                            Login
                        </Link>
                        <Button
                            variant="outline"
                            label="Get Demo"
                            onClick={() => {
                                console.log('Login');
                            }}
                        />
                    </section>
                </div>
                <div className="flex w-full items-center justify-between lg:hidden">
                    <Logo />
                    <div className="flex h-10 w-10 items-center justify-center">
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </nav>
    );
}
