import { Button } from "../Button";

const AddAndFiltersButtons = () => {
  return (
    <div className="px-6 flex flex-col gap-4 py-4">
      <Button buttonClassName="py-6" flex>
        + Adicionar usuário
      </Button>
      <div className="flex justify-between h-10 items-center">
        <div className="flex gap-4">
          <Button>Ver apenas ativos</Button>
          <Button styleType="secondary">Limpar Filtros</Button>
        </div>

        <p className="text-sm text-zinc-700">Ativos 2/4</p>
      </div>
    </div>
  );
};

export default AddAndFiltersButtons;
