import type { Meta, StoryObj } from "@storybook/react";
import { DpeBadge, DpeGrade } from "../components/DpeBadge";

const meta: Meta<typeof DpeBadge> = {
  title: "Design System/Atoms/DpeBadge",
  component: DpeBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Badge DPE (Diagnostic de Performance Énergétique) — lettre A-G dans un carré coloré 20×20px. Couleurs réglementaires fixes.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DpeBadge>;

export const GradeA: Story = { args: { grade: "A" } };
export const GradeB: Story = { args: { grade: "B" } };
export const GradeC: Story = { args: { grade: "C" } };
export const GradeD: Story = { args: { grade: "D" } };
export const GradeE: Story = { args: { grade: "E" } };
export const GradeF: Story = { args: { grade: "F" } };
export const GradeG: Story = { args: { grade: "G" } };

export const AllGrades: Story = {
  render: () => (
    <div className="flex gap-[8px] items-center">
      {(["A", "B", "C", "D", "E", "F", "G"] as DpeGrade[]).map((grade) => (
        <DpeBadge key={grade} grade={grade} />
      ))}
    </div>
  ),
};
