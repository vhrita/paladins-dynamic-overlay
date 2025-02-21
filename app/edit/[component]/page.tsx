'use client';

import { useParams } from 'next/navigation';
import { componentMap } from '@/context/ComponentMap';
import { notFound } from 'next/navigation';

export default function EditComponentPage() {
  const params = useParams<{ component: string }>();
  const component = params?.component;

  const LoadedComponent = componentMap[component];

  if (!LoadedComponent) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {LoadedComponent && <LoadedComponent mode="edit" />}
    </div>
  );
}