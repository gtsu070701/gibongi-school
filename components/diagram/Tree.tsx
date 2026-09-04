export type TreeNode = {
  label: string;
  sub?: string;
  size?: "root" | "mid" | "leaf";
  tone?: "neutral" | "prime" | "composite" | "unit";
  children?: TreeNode[];
};

function toneClass(tone: TreeNode["tone"]) {
  switch (tone) {
    case "prime":
      return "border-[var(--prime)] bg-[var(--prime-tint)] text-[var(--prime)]";
    case "composite":
      return "border-[var(--composite)] bg-[var(--composite-tint)] text-[var(--composite)]";
    case "unit":
      return "border-[var(--unit)] bg-[var(--unit-tint)] text-[var(--unit)]";
    default:
      return "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--ink)]";
  }
}

function sizeClass(size: TreeNode["size"]) {
  switch (size) {
    case "root":
      return "min-w-[68px] px-5 py-3 text-lg";
    case "leaf":
      return "min-w-[40px] px-3 py-2 text-sm";
    default:
      return "min-w-[52px] px-4 py-2.5 text-base";
  }
}

export function Tree({ node }: { node: TreeNode }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex w-fit min-w-full flex-col items-center">
        <TreeInner node={node} />
      </div>
    </div>
  );
}

function TreeInner({ node }: { node: TreeNode }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`font-mono-num flex items-center justify-center whitespace-nowrap rounded-xl border-[1.5px] font-bold ${toneClass(
          node.tone
        )} ${sizeClass(node.size)}`}
      >
        <span className="flex flex-col items-center whitespace-nowrap">
          {node.label}
          {node.sub && <small className="mt-0.5 whitespace-nowrap font-sans text-[11px] font-normal text-[var(--ink-soft)]">{node.sub}</small>}
        </span>
      </div>
      {node.children && node.children.length > 0 && (
        <div className={`tree-kids ${node.children.length === 3 ? "tree-kids-3" : "tree-kids-2"}`}>
          {node.children.map((child, i) => (
            <div className="tree-branch" key={i}>
              <TreeInner node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
