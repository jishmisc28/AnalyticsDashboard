import React, { useState, useEffect } from 'react';
import Graph from 'react-digraph';
import './styles.css';

const DBDiagram = ({ tableData }) => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const parsedGraph = parseTableData(tableData);
    console.log(parsedGraph);
    setGraph(parsedGraph);
  }, [tableData]);

  const parseTableData = (tableData) => {
    const lines = tableData.split("\n");
    const nodes = [];
    const edges = [];
    let currentTable = null;
    let nodeId = 0;
    let edgeId = 0;
  
    lines.forEach((line) => {
      const tableMatch = line.match(/^Table (\w+) {$/);
      if (tableMatch) {
        currentTable = { id: `table${nodeId}`, name: tableMatch[1], type: 'table' };
        nodes.push(currentTable);
        nodeId++;
      } else if (currentTable) {
        const referenceMatch = line.match(/^Ref: (\w+)\.(\w+) < (\w+)\.(\w+)$/);
        if (referenceMatch) {
          const sourceNode = nodes.find((node) => node.name === referenceMatch[1]);
          const targetNode = nodes.find((node) => node.name === referenceMatch[3]);
          if (sourceNode && targetNode) {
            edges.push({
              id: `edge${edgeId}`,
              source: sourceNode.id,
              target: targetNode.id,
              type: 'ref',
            });
            edgeId++;
          }
        }
      }
    });
  
    return { nodes, edges };
  };
  
  const GraphConfig = {
    NodeTypes: {
      table: {
        typeText: 'Table',
        shapeId: '#table',
        shape: (
          <symbol viewBox="0 0 154 154" id="table" width="154" height="154">
            <rect width="154" height="154" fill="rgba(30, 144, 255, 0.12)" />
          </symbol>
        ),
      },
    },
    NodeSubtypes: {},
    EdgeTypes: {
      ref: {
        shapeId: '#ref',
        shape: (
          <symbol viewBox="0 0 50 50" id="ref" width="50" height="50">
            <circle cx="25" cy="25" r="8" fill="rgba(50, 50, 50, 0.9)" />
          </symbol>
        ),
      },
    },
  };

  return (
    <div className="db-diagram">
      <h2>DB Diagram</h2>
      <Graph
        readOnly
        graph={graph}
        gridSpacing={36}
        gridDotSize={2}
        gridSize={4096}
        nodeKey="id"
        nodeTypes={GraphConfig.NodeTypes}
        nodeSubtypes={GraphConfig.NodeSubtypes}
        edgeTypes={GraphConfig.EdgeTypes}
      />
    </div>
  );
};

export default DBDiagram;