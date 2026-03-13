import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

type Position = { x: number; y: number } | null;

const useDraggableElement = (
  elementRef: RefObject<HTMLDivElement | null>,
  setElementPosition: (position: Position) => void,
  elementPosition: Position,
  isElementCreated: boolean,
) => {
  useEffect(() => {
    if (!elementRef.current || !isElementCreated) return;

    const draggableInstances = Draggable.create(elementRef.current, {
      type: "x,y",
      onDragEnd: function () {
        setElementPosition?.({
          x: this.x,
          y: this.y,
        });
      },
    });

    return () => {
      draggableInstances.forEach((draggable) => draggable.kill());
    };
  }, [elementRef, setElementPosition, isElementCreated]);

  useEffect(() => {
    if (!elementRef.current || !elementPosition) return;

    gsap.set(elementRef.current, {
      x: elementPosition.x,
      y: elementPosition.y,
    });
  }, [elementRef, elementPosition, isElementCreated]);
};

export default useDraggableElement;
