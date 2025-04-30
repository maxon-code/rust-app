"use client"
import { useState } from "react";
import { Button } from "@heroui/button";
import {color} from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div style={{ padding: "2rem" }}>
        {/* Шапка */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem"
        }}>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Калькулятор рейда
        </span>
          <Button
              color="primary"
              variant="shadow"
              style={{ fontSize: "1.25rem", padding: "0.75rem 1.5rem" }}
              onClick={() => setIsModalOpen(true)} // открыть модалку
          >
            +
          </Button>
        </div>


        <span style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        С помощью данного калькулятора вы с легкостью сможете посчитать необходимое для рейда количество и стоимость крафта взрывчатки...
      </span>

        {isModalOpen && (
            <div style={{
              position: "fixed",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000
            }}>
              <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "1rem",
                minWidth: "300px",
                maxWidth: "90%"
              }}>
                <h2 style={{color: "black"}}>Выберите предмет для рейда</h2>
                <Button
                    onClick={() => setIsModalOpen(false)}
                >
                  Закрыть
                </Button>
              </div>
            </div>
        )}
      </div>
  );
}
