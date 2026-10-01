import { MeepleLibraryEntry } from './MeepleLibraryEntry';

export type MeepleSource = 'pdf' | 'photo' | 'manual';
export type MeepleSourceOptionProps = {
  source: MeepleSource;
  onPress?: () => void;
  disabled?: boolean;
};

const content: Record<MeepleSource, { title: string; detail: string }> = {
  pdf: { title: 'Subir un PDF', detail: 'Elegí el reglamento o la planilla' },
  photo: { title: 'Usar una foto', detail: 'Fotografiá la tabla de puntos' },
  manual: { title: 'Crear manualmente', detail: 'Armá y ajustá tu planilla' },
};

/** Una opción por fila; la fila completa abre el siguiente paso. */
export function MeepleSourceOption({ source, onPress, disabled = false }: MeepleSourceOptionProps) {
  const { title, detail } = content[source];
  return <MeepleLibraryEntry title={title} detail={detail} onPress={onPress} disabled={disabled} />;
}
