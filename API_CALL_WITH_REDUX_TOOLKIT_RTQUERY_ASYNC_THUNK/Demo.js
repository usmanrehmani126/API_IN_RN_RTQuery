import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductApi } from "./Redux/ProductSlice";
import { useGetDataQuery } from "./Redux/RTQueryAPIFolder/GetApi";

const Demo = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product);
//   console.log(JSON.stringify(products));

const {data}=useGetDataQuery()
console.log(data)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={{ backgroundColor: "black", padding: 15 }}
        onPress={() => {
        //   dispatch(fetchProductApi());
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          CALL API
        </Text>
      </Pressable>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
