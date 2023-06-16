import React, { useEffect, useRef } from "react";
import { DataSet, Network } from "vis-network/standalone/esm/vis-network";

const parseTableData = (tableData) => {
  const lines = tableData.split("\n");
  const tables = [];
  let currentTable = null;

  lines.forEach((line) => {
    const tableMatch = line.match(/^Table (\w+) {$/);
    if (tableMatch) {
      currentTable = { name: tableMatch[1], references: [] };
      tables.push(currentTable);
    } else if (currentTable) {
      const referenceMatch = line.match(/^Ref: (\w+)\.(\w+) < (\w+)\.(\w+)$/);
      if (referenceMatch) {
        const referenceTable = tables.find(
          (table) => table.name === referenceMatch[3]
        );
        if (referenceTable) {
          referenceTable.references.push({
            column: referenceMatch[4],
            referenceTable: referenceMatch[1],
            referenceColumn: referenceMatch[2]
          });
        }
      }
    }
  });

  return tables;
};

const BKPDBDiagram = ({ tableData }) => {
  const networkRef = useRef(null);
  const tables = parseTableData(tableData);

  useEffect(() => {
    if (tables.length > 0) {
      const nodes = new DataSet(
        tables.map((table, index) => ({
          id: table.name,
          label: table.name,
          x: index * 200,
          y: 0
        }))
      );

      const edges = new DataSet(
        tables.flatMap((table) =>
          table.references.map((reference) => ({
            from: table.name,
            to: reference.referenceTable,
            label: `${reference.column} -> ${reference.referenceColumn}`
          }))
        )
      );

      const container = networkRef.current;
      const data = { nodes, edges };
      const options = {
        nodes: {
          shape: "box"
        },
        edges: {
          arrows: "to"
        },
        physics: {
          enabled: false
        }
      };

      new Network(container, data, options);
    }
  }, [tables]);

  return <div ref={networkRef} style={{ width: "100%", height: "100%" }} />;
};

export default BKPDBDiagram;
