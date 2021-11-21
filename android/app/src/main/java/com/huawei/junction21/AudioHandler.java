package com.huawei.junction21;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.dooboolab.audiorecorderplayer.RNAudioRecorderPlayerPackage;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;
import java.util.Map;
import java.util.HashMap;

import android.media.MediaPlayer;
import android.media.audiofx.PresetReverb;
import android.net.Uri;
import android.util.Log;

public class AudioHandler extends ReactContextBaseJavaModule {

    AudioHandler(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "AudioHandler";
    }

    @ReactMethod
    public void setSoundEffect() {
//        MediaPlayer mMediaPlayer = new MediaPlayer();
//        try {
//            mMediaPlayer.setDataSource("/data/user/0/com.huawei.junction21/cache/sound.mp4");
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        PresetReverb mReverb = new PresetReverb(0,0);
//        mReverb.setPreset(PresetReverb.PRESET_LARGEROOM);
//        mReverb.setEnabled(true);
//        mMediaPlayer.attachAuxEffect(mReverb.getId());
//        mMediaPlayer.setAuxEffectSendLevel(1.0f);
//        try {
//            mMediaPlayer.prepare();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        mMediaPlayer.start();
    }
}
