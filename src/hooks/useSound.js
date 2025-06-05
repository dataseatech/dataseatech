import React, { useCallback } from 'react';

const useSound = () => {
  const playSound = useCallback((soundName, volume = 0.3) => {
    const soundEffects = {
      click: '/sounds/click.mp3',
      hover: '/sounds/hover.mp3',
      submit: '/sounds/submit.mp3',
      filter: '/sounds/filter.mp3',
      focus: '/sounds/focus.mp3',
      video_play: '/sounds/video_play.mp3',
      subtle_hover: '/sounds/subtle_hover.mp3',
      page_transition: '/sounds/page_transition.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      notification: '/sounds/notification.mp3',
      form_submit: '/sounds/form_submit.mp3',
      button_hover: '/sounds/button_hover.mp3',
      card_hover: '/sounds/card_hover.mp3',
      item_select: '/sounds/item_select.mp3',
    };

    if (soundEffects[soundName]) {
      const audio = new Audio(soundEffects[soundName]);
      audio.volume = volume;
      audio.play().catch(error => console.warn(`Failed to play sound ${soundName}:`, error));
    } else {
      console.warn(`Sound effect "${soundName}" not found.`);
    }
  }, []);

  return playSound;
};

export default useSound;