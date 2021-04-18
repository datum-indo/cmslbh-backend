import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateOneWithoutLogRequestInput } from "../inputs/ApplicationUpdateOneWithoutLogRequestInput";
import { ClientUpdateManyWithoutLogRequestInput } from "../inputs/ClientUpdateManyWithoutLogRequestInput";
import { LogRequestAppUpdateManyWithoutLogRequestIdInput } from "../inputs/LogRequestAppUpdateManyWithoutLogRequestIdInput";
import { NetworkUpdateOneWithoutLogRequestInput } from "../inputs/NetworkUpdateOneWithoutLogRequestInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneWithoutLogRequestInput } from "../inputs/PersonUpdateOneWithoutLogRequestInput";
import { UserUpdateOneWithoutLogRequestByInput } from "../inputs/UserUpdateOneWithoutLogRequestByInput";
import { UserUpdateOneWithoutLogRequestToInput } from "../inputs/UserUpdateOneWithoutLogRequestToInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  isiRequest?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  jenisRequest?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  statusRequest?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tanggapanRequest?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tanggapanRequestIsi?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  tglExpired?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  tglRequest?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  tglRespon?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateOneWithoutLogRequestInput, {
    nullable: true
  })
  applicationId?: ApplicationUpdateOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpdateOneWithoutLogRequestInput, {
    nullable: true
  })
  networkId?: NetworkUpdateOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneWithoutLogRequestInput, {
    nullable: true
  })
  personId?: PersonUpdateOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutLogRequestByInput, {
    nullable: true
  })
  requestBy?: UserUpdateOneWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutLogRequestToInput, {
    nullable: true
  })
  requestTo?: UserUpdateOneWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateManyWithoutLogRequestIdInput, {
    nullable: true
  })
  pp?: LogRequestAppUpdateManyWithoutLogRequestIdInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateManyWithoutLogRequestInput, {
    nullable: true
  })
  Client?: ClientUpdateManyWithoutLogRequestInput | undefined;
}
