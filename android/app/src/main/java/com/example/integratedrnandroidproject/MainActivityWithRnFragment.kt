package com.example.integratedrnandroidproject

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.microsoft.appcenter.AppCenter
import com.microsoft.appcenter.analytics.Analytics
import com.microsoft.appcenter.crashes.Crashes

class MainActivityWithRnFragment : AppCompatActivity(), DefaultHardwareBackBtnHandler {
    private lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_with_rn_fragment)
        AppCenter.start(
            application,
            "05f33325-dc53-4d49-856e-11c0608e3a38",
            Analytics::class.java,
            Crashes::class.java
        )

        val button = findViewById<Button>(R.id.openRnFragmentBtn)
        button.setOnClickListener {
            val reactNativeFragment = ReactFragment.Builder()
                .setComponentName("MyReactNativeApp")
                .setLaunchOptions(getLaunchOptions("test message"))
                .build()
            supportFragmentManager
                .beginTransaction()
                .add(R.id.reactNativeFragment, reactNativeFragment)
                .commit()
        }
    }

    // Used to pass props to RN
    private fun getLaunchOptions(message: String) = Bundle().apply {
        putString("message", message)
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }
}